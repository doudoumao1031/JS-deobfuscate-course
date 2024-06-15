// t.isIdentifier(path.node) // 判断是否是标识符
// path.node.type === 'Identifier' // 判断是否是标识符

// node_modules/@babel/types/lib/index.d.ts check the type of node

const babel = require('@babel/core');
const t = require('@babel/types');


// Creating identifiers 'a' and 'b'
let a = t.identifier('a');
let b = t.identifier('b');

// Creating binary expressions a + b and a * b
let binExpr2 = t.binaryExpression('+', a, b);
let binExpr3 = t.binaryExpression('*', a, b);

// Creating return statements returning a + b + 1000 and a * b + 1000
let retSta2 = t.returnStatement(t.binaryExpression('+', binExpr2, t.numericLiteral(1000)));
let retSta3 = t.returnStatement(t.binaryExpression('+', binExpr3, t.numericLiteral(1000)));

// Creating block statements containing the return statements
let bloSta2 = t.blockStatement([retSta2]);
let bloSta3 = t.blockStatement([retSta3]);

// Creating function expressions with the block statements
let funcExpr2 = t.functionExpression(null, [a, b], bloSta2);
let funcExpr3 = t.functionExpression(null, [a, b], bloSta3);

// Creating object properties and object expression
let objProp1 = t.objectProperty(t.identifier('name'), t.stringLiteral('xiaojianbang'));
let objProp2 = t.objectProperty(t.identifier('add'), funcExpr2);
let objProp3 = t.objectProperty(t.identifier('mul'), funcExpr3);
let objExpr = t.objectExpression([objProp1, objProp2, objProp3]);

// Creating a variable declaration for the object
let varDec = t.variableDeclarator(t.identifier('obj'), objExpr);
let localAst = t.variableDeclaration('let', [varDec]);

// Generating code from the AST
let code = babel.transformFromAstSync(t.file(t.program([localAst])), null, { presets: ['@babel/preset-env'] }).code;
console.log(code);
