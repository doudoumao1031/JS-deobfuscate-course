const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const generator = require('@babel/generator').default;

// Read the obfuscated code from the file
// const jsCode = fs.readFileSync('/Users/liang/ProgramFiles/CodeSpace/JS逆向/JS-deobfuscate-course/小肩膀/51.还原代码中的常量/obfuscated01.js', { encoding: 'utf-8' });
// const jsCode = fs.readFileSync('/Users/liang/ProgramFiles/CodeSpace/JS逆向/JS-deobfuscate-course/小肩膀/51.还原代码中的常量/obfuscated02.js', { encoding: 'utf-8' });
const jsCode = fs.readFileSync('/Users/liang/ProgramFiles/CodeSpace/JS逆向/JS-deobfuscate-course/小肩膀/51.还原代码中的常量/obfuscated03.js', { encoding: 'utf-8' });
const ast = parser.parse(jsCode);

let stringArrayFunctionName = '';
let stringArrayFunctionNode = undefined;
let decodeFunctionName = '';
let decodeFunctionNode = undefined;
let variableMappings = {};
let reverseMappings = {};

// First pass: extract the string array and the decoding function name
traverse(ast, {
  FunctionDeclaration(path) {
    if (path.node.params.length !== 2) return;
    const functionBody = path.node.body.body;
    if (functionBody[0] && !t.isVariableDeclaration(functionBody[0])) return;
    if (functionBody[1] && !t.isExpressionStatement(functionBody[1])) return;
    if (functionBody[2] && !t.isReturnStatement(functionBody[2])) return;
    functionBody.forEach(statement => {
      if (t.isReturnStatement(statement) && t.isCallExpression(statement.argument)) {
        // Found the decoding function
        decodeFunctionName = path.node.id.name;
        decodeFunctionNode = path.node;
        // console.log('Decoding function name:', decodeFunctionName);
      }
    });

    if (t.isCallExpression(functionBody[0].declarations[0].init) && t.isIdentifier(functionBody[0].declarations[0].init.callee)) {
        stringArrayFunctionName = functionBody[0].declarations[0].init.callee.name;
      
    }
  }
});

traverse(ast, {
    FunctionDeclaration(path) {
        if(t.isIdentifier(path.node.id) && path.node.id.name === stringArrayFunctionName){
            stringArrayFunctionNode = path.node;
            // console.log('stringArrayFunctionNode', stringArrayFunctionNode)
        }
    
    }
});

const newAst = parser.parse('');
newAst.program.body.push(stringArrayFunctionNode);
newAst.program.body.push(decodeFunctionNode);

// Generate the decryption function code
const decryptionFunctionCode = generator(newAst, { compact: true }).code;
// console.log('Decryption function code:', decryptionFunctionCode);

eval(decryptionFunctionCode)

// Second pass: replace calls to the decoding function with the actual strings and map variable assignments
traverse(ast, {
  CallExpression(path) {
    if (t.isIdentifier(path.node.callee) && path.node.callee.name === decodeFunctionName) {
      const args = path.node.arguments;
      if (args.length === 2 && t.isNumericLiteral(args[0])) {
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

// Replace recursive references in variable declarations
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

// Second pass: replace calls to the decoding function with the actual strings and map variable assignments
traverse(ast, {
    CallExpression(path) {
      if (t.isIdentifier(path.node.callee) && path.node.callee.name === decodeFunctionName) {
        const args = path.node.arguments;
        if (args.length === 2 && t.isNumericLiteral(args[0])) {
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

// Second pass: replace calls to the decoding function with the actual strings
traverse(ast, {
    CallExpression(path) {
      if (
        t.isIdentifier(path.node.callee) && 
        path.node.callee.name === decodeFunctionName && 
        path.node.arguments.length === 1
    ) {
        // const binding = path.scope.getBinding(decodeFunctionName);
        // binding && binding.referencePaths.map(function(v) {
        //   if (v.parentPath.isCallExpression()) {
        //     v.parentPath.replaceWith(t.stringLiteral(eval(v.parentPath + '')));
        //     }
        //     });
        console.log('before', generator(path.node).code, eval(path + ''))
        // console.log(generator(path.node).code, )
        path.replaceWith(t.stringLiteral(eval(path + '')));
        // path.parentPath.remove() 
        console.log('after', generator(path.node).code)
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
