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

// Second pass: map variable assignments to their values
traverse(ast, {
  VariableDeclarator(path) {
    if (t.isCallExpression(path.node.init) && t.isIdentifier(path.node.init.callee) && path.node.init.callee.name === decodeFunctionName) {
      const decodedString = decodeFunctionCall(path.node.init.arguments);
      if (decodedString !== undefined) {
        variableMappings[path.node.id.name] = decodedString;
      }
    } else if (t.isIdentifier(path.node.init) && variableMappings[path.node.init.name]) {
      variableMappings[path.node.id.name] = variableMappings[path.node.init.name];
    }
  }
});

// Replace recursive references in variable declarations
traverse(ast, {
  Identifier(path) {
    if (variableMappings[path.node.name]) {
      path.replaceWith(t.stringLiteral(variableMappings[path.node.name]));
    }
  }
});

// Decode the function calls
function decodeFunctionCall(args) {
  const [index, _] = args;
  const arrayIndex = index.value - 0x12b;
  if (arrayIndex >= 0 && arrayIndex < stringArray.length) {
    const decodedString = stringArray[arrayIndex];
    return decodedString;
  } else {
    return undefined;
  }
}

// Third pass: replace calls to the decoding function with the actual strings
traverse(ast, {
  CallExpression(path) {
    if (t.isIdentifier(path.node.callee) && path.node.callee.name === decodeFunctionName) {
      const decodedString = decodeFunctionCall(path.node.arguments);
      if (decodedString !== undefined) {
        path.replaceWith(t.stringLiteral(decodedString));
      }
    }
  }
});

// Generate the final decoded code
const finalDecodedCode = generator(ast).code;
fs.writeFileSync('./finalDecoded.js', finalDecodedCode, { encoding: 'utf-8' });

console.log('Final decoding complete. Final decoded code written to finalDecoded.js');
