
/**
 * Parent path
 */
path.parentPath.node === path.parent

// 向上遍历寻找 
// return NodePath
const visitor = {
    ReturnStatement(path){
        let funcPath1 = path.findParent(p => p.isFunctionDeclaration()) // 不包含自身
        let funcPath2 = path.find(p => p.isFunctionDeclaration()) // 包含自身
        console.log(funcPath.node)
    }
}

path.getFunctionParent() // 获取最近的函数节点
path.getStatementParent() // 获取最近的语句节点

path.parentPath.remove() // 删除父节点
path.parentPath.replaceWith(t.identifier('a')) // 替换父节点

