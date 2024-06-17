const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const generator = require('@babel/generator').default;

// Read the obfuscated code from the file
const jsCode = fs.readFileSync('/Users/liang/ProgramFiles/CodeSpace/JS逆向/JS-deobfuscate-course/pg还原/obfuscated01.js', { encoding: 'utf-8' });
// const jsCode = fs.readFileSync('/Users/liang/ProgramFiles/CodeSpace/JS逆向/JS-deobfuscate-course/pg还原/obfuscated02.js', { encoding: 'utf-8' });
// const jsCode = fs.readFileSync('/Users/liang/ProgramFiles/CodeSpace/JS逆向/JS-deobfuscate-course/pg还原/obfuscated03.js', { encoding: 'utf-8' });
// const jsCode = fs.readFileSync('/Users/liang/ProgramFiles/CodeSpace/JS逆向/JS-deobfuscate-course/pg还原/obfuscated04.js', { encoding: 'utf-8' });
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
  // while (variableMappings[name]) {
  //   name = variableMappings[name];
  // }
  // return name;
  const seen = new Set();
  while (variableMappings[name] && !seen.has(name)) {
    seen.add(name);
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
          path.replaceWith(t.stringLiteral(eval(path + '')));
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

// Helper function to recursively traverse and clean the AST
function cleanAST(ast) {
    traverse(ast, {
        enter(path) {

            // Handle string equality comparisons
            if (path.isIfStatement() &&
                t.isBinaryExpression(path.node.test) &&
                t.isStringLiteral(path.node.test.left) &&
                t.isStringLiteral(path.node.test.right)) {
                const leftValue = path.node.test.left.value;
                const rightValue = path.node.test.right.value;
                const operator = path.node.test.operator;

                if (operator === '===') {
                    if(leftValue === rightValue){
                      path.replaceWith(path.node.consequent);
                      cleanAST(path.node.consequent); // Recursively clean the consequent block
                    }else{
                      path.replaceWith(path.node.alternate);
                      cleanAST(path.node.alternate); // Recursively clean the consequent block
                    }
                } else if (operator === '!==') {
                    if(leftValue !== rightValue){
                      path.replaceWith(path.node.consequent);
                      cleanAST(path.node.consequent); // Recursively clean the consequent block
                    }else{
                      path.replaceWith(path.node.alternate);
                      cleanAST(path.node.alternate); // Recursively clean the consequent block
                    }
                }
            }
        }
    });
}

// Clean the AST
cleanAST(ast);

// Traverse and transform the AST
traverse(ast, {
  VariableDeclaration(path) {
    const node = path.node;
    // Check if the declaration is of the form 'var i = i;'
    if (
      node.declarations.length === 1 &&
      t.isIdentifier(node.declarations[0].id) &&
      t.isIdentifier(node.declarations[0].init) &&
      node.declarations[0].id.name === node.declarations[0].init.name
    ) {
      path.remove();
    }
  }
});

traverse(ast, {
  UnaryExpression(path) {
    // Check if the UnaryExpression is a negation of a numeric literal
    if (path.node.operator === '!' && t.isNumericLiteral(path.node.argument)) {
      const value = path.node.argument.value;
      if (value === 0) {
        // Transform !0 to true
        path.replaceWith(t.booleanLiteral(true));
      } else if (value === 1) {
        // Transform !1 to false
        path.replaceWith(t.booleanLiteral(false));
      }
    }

    // Check if the UnaryExpression is a void operator with a numeric literal argument of 0
    if (path.node.operator === 'void' && t.isNumericLiteral(path.node.argument) && path.node.argument.value === 0) {
      // Replace void 0 with undefined
      path.replaceWith(t.identifier('undefined'));
    }
  }
});

traverse(ast, {
  UnaryExpression(path) {
    // Check if the UnaryExpression is a negation of an array literal
    if (path.node.operator === '!' && t.isArrayExpression(path.node.argument)) {
      // Transform ![] to false
      path.replaceWith(t.booleanLiteral(false));
    }
  },
  LogicalExpression(path) {
    // Check if the LogicalExpression is a double negation of an array literal
    if (
      path.node.operator === '&&' &&
      t.isUnaryExpression(path.node.left, { operator: '!' }) &&
      t.isArrayExpression(path.node.left.argument)
    ) {
      // Ensure the expression is !![]
      path.replaceWith(t.booleanLiteral(true));
    }
  }
});

traverse(ast, {
  FunctionDeclaration(path) {
      if(t.isIdentifier(path.node.id) && path.node.id.name === stringArrayFunctionName && path.node.params.length === 0){
          path.remove();
      }else if(t.isIdentifier(path.node.id) && path.node.id.name === decodeFunctionName && path.node.params.length === 2){
          path.remove();
      }
  }
});


// Generate the decoded code
const decodedCode = generator(ast).code;
fs.writeFileSync('/Users/liang/ProgramFiles/CodeSpace/JS逆向/JS-deobfuscate-course/pg还原/decoded.js', decodedCode, { encoding: 'utf-8' });

console.log('Decoding complete. Decoded code written to decoded.js');
