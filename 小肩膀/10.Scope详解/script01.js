// path.scope.block // 获取当前节点的作用域 返回Node对象

/**
 * 获取作用域
 */
const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const generator = require('@babel/generator').default;

// Read the source code from demo.js file
const jscode = fs.readFileSync('./target.js', {
    encoding: 'utf-8'
});

// Parse the JavaScript code into an AST (Abstract Syntax Tree)
let ast = parser.parse(jscode);

// Traverse the AST to find identifiers named 'e'
// traverse(ast, {
//     Identifier(path) {
//         if (path.node.name == 'e') {
//             // Log the code of the block where the identifier 'e' is found
//             console.log(generator(path.scope.block).code);
//         }
//     },
//     FunctionDeclaration(path) {
//         console.log(generator(path.scope.block).code);
//         console.log(generator(path.scope.parent.block).code);
//     }
// });

/**
 * 标识符重命名
 */
// traverse(ast, {
//     FunctionExpression(path){
//         let binding = path.scope.getBinding('b')
//         binding.scope.rename('b', 'x')
//     }
// })
traverse(ast, {
    Identifier(path){
        path.scope.rename(path.node.name, path.scope.generateUidIdentifier('_0x2ba5e').name)
    }
})


// Generate the modified code from the AST
let code = generator(ast).code;

// Write the modified code to a new file called demoNew.js
fs.writeFile('./targetNew.js', code, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File successfully written as demoNew.js');
    }
});
