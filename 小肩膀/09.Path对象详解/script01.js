/**
 * path的操作
 */

const { binaryExpression } = require("@babel/types")
const path = require("path")


// 获取子path
const visitor = {
    BinaryExpression(path) {
        // 获取子节点
        console.log(path.node.left)
        console.log(path.node.right)
        console.log(path.node.operator)
        // 获取子path
        console.log(path.get('left'))
        console.log(path.get('right'))
        console.log(path.get('operator'))
    }
}

// 判断path类型
// 注意是基于挂在path上的type进行判断 而不是基于node，但一般是一致的
console.log(path.get('left').isIdentifier())
console.log(path.get('left').assertIdentifier())

// 节点转代码
console.log(generator(path.node).code)
console.log(path.toString())

// 替换节点属性 
// 直接覆盖
path.node.left = t.identifier('a')

// 替换整个节点
path.replaceWith(t.identifier('a'))
path.replaceWith(t.valueToNode(1))
// 一条语句替换为多条语句
path.replaceWithMultiple([t.identifier('a'), t.identifier('b')])
path.replaceInline([t.identifier('a'), t.identifier('b')]) // 一个或者多个节点
path.replaceWithSourceString('a + b')

traverse(ast, {
    ReturnStatement(path) {
        let argumentPath = path.get('argument')
        path.replaceWithSourceString(
            `function(){return + ${argumentPath.toString()} + 1000}`
        )
        path.stop() // 不加会是死循环
    }
})

// 删除节点
path.remove()

// 插入节点
path.insertBefore(t.identifier('a')) 
path.insertAfter(t.identifier('a'))

path.stop() // 停止遍历当前节点的子节点 并不会停止遍历当前节点的兄弟节点