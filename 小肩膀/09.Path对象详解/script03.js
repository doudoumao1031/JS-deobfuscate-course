const { classMethod } = require("@babel/types");

/**
 * 同级path
 */
listKey // 获取当前节点在父节点中的位置 容器
key // 获取当前节点在父节点中的位置 索引

container // 一般是数组 用于同级操作

traverse(ast, {
    ReturnStatement(path) {
        console.log(path.inList); // 是否有同级节点 只有一个成员也会返回true
        console.log(path.listKey); // 当前节点在父节点中的位置 容器名
        console.log(path.key); // 当前节点在父节点中的位置 索引
        console.log(path.container); // 一般是数组 用于同级操作 获取容器
        console.log(path.getSiblings()); // 获取同级节点
        console.log(path.getSibling(path.key + 1)); // 获取下一个同级节点
    }
})

// 参数列表 listKey, [nodes]
path.parentPath.unshiftContainer('body', t.expressionStatement(t.stringLiteral('before')))
path.parentPath.pushContainer('body', t.expressionStatement(t.stringLiteral('after')))

// 操控参数
path.parentPath.parentPath.unshiftContainer('params', [t.identifier('a'), t.identifier('b')])
// 函数体加内容
ClassMethod(path){
    path.get('body').unshiftContainer('body', t.expressionStatement(t.stringLiteral('before')))
}