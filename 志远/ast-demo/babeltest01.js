// import * as parser from "@babel/parser";
// import traverse from "@babel/traverse";
const parser = require("@babel/parser");
const babel = require("@babel/core");
const generator = require("@babel/generator");
const types = require('@babel/types');
const template = require('@babel/template');
const traverse = require('@babel/traverse').default; // Fix the import
const fs = require('fs');

const code = fs.readFileSync('./target.js', {encoding: 'utf-8'});

const ast = parser.parse(code);

traverse(ast, {
  enter(path) {
    if (path.isIdentifier({ name: "n" })) {
      path.node.name = "x";
    }
  },
});