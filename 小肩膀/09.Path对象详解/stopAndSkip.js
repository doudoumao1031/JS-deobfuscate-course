// path 与 node 的区别
// path 是 node 的包装，提供了很多方法，可以方便的操作 node

// path.stop 与 path.skip
// path.stop 用于停止遍历当前节点的子节点
// path.skip 用于跳过当前节点的子节点

const parser = require("@babel/parser");
const babel = require("@babel/core");
const generator = require("@babel/generator").default;
const types = require('@babel/types');
const template = require('@babel/template');
const traverse = require('@babel/traverse').default;

const fs = require('fs');

const code = fs.readFileSync('./target.js', {encoding: 'utf-8'});
// var code = `var a = 1;`;

var ast = parser.parse(code, {sourceType: 'module'}); // Ensure to set sourceType

const updateParamNameVisitor = {
    Identifier(path) {
        if (path.node.name === this.paraName) {
            path.node.name = 'a';
        }
        console.log(path)
        // path.stop()
        path.skip()
    }
}

const visitor1 = {
    FunctionExpression(path) {
        console.log('FunctionExpression enter');
        const paraName = path.node.params[0].name;
        path.traverse(updateParamNameVisitor, {paraName});
    }
}

traverse(ast, visitor1);

let result = generator(ast);

console.log(result.code);
fs.writeFileSync('./target_solution.js', result.code, {encoding: 'utf-8'});
