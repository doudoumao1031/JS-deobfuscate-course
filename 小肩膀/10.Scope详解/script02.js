/**
 * 标识符绑定
 */

// 向上找标识符 并获取相关信息
// 实测 只会找定义



const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const { identifier } = require('@babel/types');
const generator = require('@babel/generator').default;

// Read the source code from demo.js file
// const jscode = fs.readFileSync('./target.js', {
const jscode = fs.readFileSync('/Users/liang/ProgramFiles/CodeSpace/JS逆向/JS-deobfuscate-course/小肩膀/10.Scope详解/target.js', {
    encoding: 'utf-8'
});

// Parse the JavaScript code into an AST (Abstract Syntax Tree)
let ast = parser.parse(jscode);

// scope.getBinding(name) // 获取标识符的绑定 返回Binding对象
// traverse(ast, {
//     FunctionDeclaration(path) {

//         let binding = path.scope.getBinding('a');
//         // console.log(binding)
//         console.log(generator(binding.scope.block).code);

        
//     }
// });

// scope.getOwnBinding(name) // 获取标识符的绑定 返回Binding对象 仅限于当前作用域
// 嵌套循环 获取作用域自己定义的标识符
function TestOwnBinding(path){
    path.traverse({
        // Identifier(path){
        //     // 注意 这个判断函数似乎不是太准确 子标识也会进入循环 还需进一步判断
        //     // console.log(generator(path.scope.block).code);
        //     let name = path.node.name;
        //     let binding = path.scope.getOwnBinding(name);
        //     console.log(path.node.name, !!binding)
        // },
        Identifier(p){
            // 注意 这个判断函数似乎不是太准确 子标识也会进入循环 还需进一步判断
            // console.log(generator(path.scope.block).code);
            let name = p.node.name;
            // let binding = p.scope.getOwnBinding(name);
            let binding = p.scope.getBinding(name);
            // console.log(path.node.name, !!binding)
            // console.log('generator', binding&&generator(binding.scope.block).code)
            // console.log('path', generator(path.node).code)
            // console.log('path', generator(path.scope.block).code)
            // 这儿对path和p做了个区分处理 才达到效果
            binding && console.log(name, generator(binding.scope.block).code == path+'');
            // binding && console.log(name, generator(binding.scope.block).code == generator(path.scope.block).code);
        },
    })
}

traverse(ast, {
    // FunctionDeclaration(path) {
    //     TestOwnBinding(path)
    // },
    FunctionExpression(path) {
        TestOwnBinding(path)
    }
});


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
