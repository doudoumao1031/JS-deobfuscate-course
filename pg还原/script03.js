const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const generator = require('@babel/generator').default;

// Read the obfuscated code from the file
const jsCode = fs.readFileSync('./obfuscated.js', { encoding: 'utf-8' });
const ast = parser.parse(jsCode);

let stringArray = [];
let decodeFunctionName = '';
let variableMappings = {};

// First pass: extract the string array and the decoding function name
traverse(ast, {
  VariableDeclaration(path) {
    const declarations = path.node.declarations;
    declarations.forEach(declaration => {
      if (t.isArrayExpression(declaration.init)) {
        // Found the string array
        stringArray = declaration.init.elements.map(element => element.value);
      }
    });
  },
  FunctionDeclaration(path) {
    const functionBody = path.node.body.body;
    functionBody.forEach(statement => {
      if (t.isReturnStatement(statement) && t.isCallExpression(statement.argument)) {
        // Found the decoding function
        decodeFunctionName = path.node.id.name;
      }
    });
  }
});

// Helper function to decode string from the array
function decodeFunctionCall(index) {
  const arrayIndex = index - 0x12b;
  if (arrayIndex >= 0 && arrayIndex < stringArray.length) {
    return stringArray[arrayIndex];
  }
  return undefined;
}

// Second pass: replace calls to the decoding function with the actual strings and map variable assignments
traverse(ast, {
  CallExpression(path) {
    if (t.isIdentifier(path.node.callee) && path.node.callee.name === decodeFunctionName) {
      const args = path.node.arguments;
      if (args.length === 2 && t.isNumericLiteral(args[0])) {
        const index = args[0].value;
        const replacement = decodeFunctionCall(index);
        if (replacement !== undefined) {
          path.replaceWith(t.stringLiteral(replacement));
        }
      }
    }
  },
  VariableDeclarator(path) {
    if (t.isIdentifier(path.node.init)) {
      variableMappings[path.node.id.name] = path.node.init.name;
    } else if (t.isCallExpression(path.node.init) && t.isIdentifier(path.node.init.callee) && path.node.init.callee.name === decodeFunctionName) {
      const args = path.node.init.arguments;
      if (args.length === 2 && t.isNumericLiteral(args[0])) {
        const index = args[0].value;
        const replacement = decodeFunctionCall(index);
        if (replacement !== undefined) {
          variableMappings[path.node.id.name] = replacement;
        }
      }
    }
  }
});

// Replace recursive references in variable declarations
function resolveIdentifier(name) {
  while (variableMappings[name]) {
    name = variableMappings[name];
  }
  return name;
}

// Traverse again to replace variable references and handle string concatenation
traverse(ast, {
  Identifier(path) {
    if (variableMappings[path.node.name]) {
      const resolvedName = resolveIdentifier(path.node.name);
      path.replaceWith(t.stringLiteral(resolvedName));
    }
  },
  BinaryExpression(path) {
    if (path.node.operator === '+') {
      const left = path.node.left;
      const right = path.node.right;
      if (t.isStringLiteral(left) && t.isStringLiteral(right)) {
        const combinedString = left.value + right.value;
        path.replaceWith(t.stringLiteral(combinedString));
      }
    }
  }
});

// Generate the decoded code
const decodedCode = generator(ast).code;
fs.writeFileSync('./decoded.js', decodedCode, { encoding: 'utf-8' });

console.log('Decoding complete. Decoded code written to decoded.js');
