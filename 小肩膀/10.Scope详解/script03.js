const { traverse } = require("@babel/types")
const { assignmentExpression } = require("@babel/types")

referencePaths // 引用Path 数组
constatntViolations // 标识符被修改Path

/**
 * 遍历作用域
 */
scope.traverse // 可以用path的scope 也可以用binding的scope

// Binding.scope.block:

// block represents the block-level scope where the binding is defined. 
// This could be a function body, a loop, or any block of code enclosed in curly braces {}.
// It essentially points to the AST node representing this block.
// 找到赋值 改了

Binding.scope.traverse(binding.scope.block, {
    AssignmentExpression(p){
        if(p.node.left.name == 'a'){
            p.node.right = t.numericLiteral(100); 
        }
    }
})

/**
 * 标识符重命名
 */
traverse(ast, {
    FunctionExpression(path){
        let binding = path.scope.getBinding('b')
        binding.scope.rename('b', 'x')
    }
})
traverse(ast, {
    Identifier(path){
        path.scope.rename(path.node.name, path.scope.generateUidIdentifier('_0x2ba5e').name)
    }
})

/**
 * scope其他方法
 */
scope.hasBinding('a')
scope.hasOwnBinding('a')
scope.getAllBindings('a')
scope.hasReference('a')
scope.getBindingIdentifier('a')
