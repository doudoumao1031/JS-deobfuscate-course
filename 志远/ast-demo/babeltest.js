const parser = require("@babel/parser");
const babel = require("@babel/core");
const generator = require("@babel/generator").default;
const types = require('@babel/types');
const template = require('@babel/template');
const traverse = require('@babel/traverse').default;

const fs = require('fs');

// const code = fs.readFileSync('./target.js', {encoding: 'utf-8'});
var code = `var a = 1;`;

var ast = parser.parse(code, {sourceType: 'module'}); // Ensure to set sourceType

const MyVisitor = {
    Identifier(path) {
        debugger;
        console.log('Identifier', path.node.name);
    },
    VariableDeclaration(path) {
        console.log('VariableDeclaration', path.node.kind);
    },
    VariableDeclarator(path) {
        console.log('VariableDeclarator', path.node.id.name);
        path.node.init = types.stringLiteral('doudouma'); // Modify the init property here
    },
    // NumericLiteral(path) {
    //     console.log('NumericLiteral', path.node.value);
    // },
};

traverse(ast, MyVisitor);

let result = generator(ast);

console.log(result.code);
