const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const generator = require('@babel/generator').default;

// Read the obfuscated code from the file
const jsCode = fs.readFileSync('/Users/liang/ProgramFiles/CodeSpace/JS逆向/JS-deobfuscate-course/小肩膀/51.还原代码中的常量/obfuscated01.js', { encoding: 'utf-8' });
// const jsCode = fs.readFileSync('/Users/liang/ProgramFiles/CodeSpace/JS逆向/JS-deobfuscate-course/小肩膀/51.还原代码中的常量/obfuscated02.js', { encoding: 'utf-8' });
// const jsCode = fs.readFileSync('/Users/liang/ProgramFiles/CodeSpace/JS逆向/JS-deobfuscate-course/小肩膀/51.还原代码中的常量/obfuscated03.js', { encoding: 'utf-8' });

const ast = parser.parse(jsCode);

let stringArrayFunctionName = '';
let stringArrayFunctionNode = undefined;
let decodeFunctionName = '';
let decodeFunctionNode = undefined;
let variableMappings = {};

// First pass: extract the string array and the decoding function name
traverse(ast, {
  FunctionDeclaration(path) {
    if (path.node.params.length !== 2) return;
    const functionBody = path.node.body.body;
    if (functionBody.length < 3) return;
    if (!t.isVariableDeclaration(functionBody[0])) return;
    if (!t.isExpressionStatement(functionBody[1])) return;
    if (!t.isReturnStatement(functionBody[2])) return;

    functionBody.forEach(statement => {
      if (t.isReturnStatement(statement) && t.isCallExpression(statement.argument)) {
        decodeFunctionName = path.node.id.name;
        decodeFunctionNode = path.node;
      }
    });

    if (t.isCallExpression(functionBody[0].declarations[0].init) && t.isIdentifier(functionBody[0].declarations[0].init.callee)) {
      stringArrayFunctionName = functionBody[0].declarations[0].init.callee.name;
    }
  }
});

traverse(ast, {
  FunctionDeclaration(path) {
    if (t.isIdentifier(path.node.id) && path.node.id.name === stringArrayFunctionName) {
      stringArrayFunctionNode = path.node;
    }
  }
});

const newAst = parser.parse('');
newAst.program.body.push(stringArrayFunctionNode);
newAst.program.body.push(decodeFunctionNode);

// Generate the decryption function code
const decryptionFunctionCode = generator(newAst, { compact: true }).code;

eval(decryptionFunctionCode);

// Second pass: replace calls to the decoding function with the actual strings and map variable assignments
traverse(ast, {
  CallExpression(path) {
    if (t.isIdentifier(path.node.callee) && path.node.callee.name === decodeFunctionName) {
      const args = path.node.arguments;
      if (args.length === 1 && t.isNumericLiteral(args[0])) {
        const index = args[0].value;
        const replacement = stringArray[index - 0x12b];
        if (replacement) {
          path.replaceWith(t.stringLiteral(replacement));
        }
      }
    }
  },
  VariableDeclarator(path) {
    if (t.isIdentifier(path.node.init)) {
      variableMappings[path.node.id.name] = path.node.init.name;
    }
  }
});

// Resolve recursive variable mappings
function resolveIdentifier(name) {
  while (variableMappings[name]) {
    name = variableMappings[name];
  }
  return name;
}

traverse(ast, {
  Identifier(path) {
    if (variableMappings[path.node.name]) {
      path.node.name = resolveIdentifier(path.node.name);
    }
  }
});

// Function to evaluate a binary expression
function evaluateBinaryExpression(node) {
  if (t.isBinaryExpression(node) && node.operator === '+') {
    const left = evaluateBinaryExpression(node.left);
    const right = evaluateBinaryExpression(node.right);
    if (t.isStringLiteral(left) && t.isStringLiteral(right)) {
      return t.stringLiteral(left.value + right.value);
    }
  }
  return node;
}

// Traverse the AST to replace concatenated string expressions
traverse(ast, {
  BinaryExpression(path) {
    if (path.node.operator === '+') {
      const evaluated = evaluateBinaryExpression(path.node);
      if (t.isStringLiteral(evaluated)) {
        path.replaceWith(evaluated);
      }
    }
  }
});

// Generate the decoded code
const decodedCode = generator(ast).code;
fs.writeFileSync('./decoded.js', decodedCode, { encoding: 'utf-8' });

console.log('Decoding complete. Decoded code written to decoded.js');


