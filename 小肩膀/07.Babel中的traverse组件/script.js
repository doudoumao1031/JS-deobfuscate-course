// 深度优先遍历
const visitor = {
    // FunctionExpression: {
    "FunctionExpression | BinaryExpression": {
        // parent node will be traversed first
        enter(path) { 
            console.log('FunctionExpression enter');
        },
        enter: [func1, func2],
        // child node will be traversed first
        exit(path) {
            console.log('FunctionExpression exit');
        }
    },
}

// 内部遍历 visitor嵌套
const updateParamNameVisitor = {
    Identifier(path) {
        if (path.node.name === this.paraName) {
            path.node.name = 'x';
        }
    }
}

const visitor1 = {
    FunctionExpression(path) {
        console.log('FunctionExpression enter');
        const paraName = path.node.params[0].name;
        path.traverse(updateParamNameVisitor, {paraName});
    }
}