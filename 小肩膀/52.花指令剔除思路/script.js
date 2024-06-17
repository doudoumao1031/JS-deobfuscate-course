// 花指令片段
// 假设原始变量和函数名
var originalVar1 = {
    fetchData: function(param1, param2) {
      return someObject.compute(param1, param2);
    },
    url: '/yzmtest/get.php?t=',
};

var originalVar2 = {
    processData: function(param1, param2) {
        return originalVar1.fetchData(param1, param2);
    },
    getUrl: originalVar1.url,
};

// 注释部分提供了变量名和函数名的说明
// originalVar2['getUrl'] 字符串花指令
// originalVar2['processData'] 函数花指令

// 字符串花指令 思路 注意花指令位置 然后递归寻找
// 如果是MemberExpression类型的节点，那么我们就要判断它的属性名是否是字符串，如果是字符串，那么就是花指令
// 如果是CallExpression类型的节点，那么我们就要判断它的callee是否是MemberExpression类型的节点，如果是，那么就是花指令
// 如果是VariableDeclarator类型的节点，那么我们就要判断它的init是否是MemberExpression类型的节点，如果是，那么就是花指令
// 如果是AssignmentExpression类型的节点，那么我们就要判断它的right是否是MemberExpression类型的节点，如果是，那么就是花指令
// 如果是ReturnStatement类型的节点，那么我们就要判断它的argument是否是MemberExpression类型的节点，如果是，那么就是花指令
// 如果是ObjectExpression类型的节点，那么我们就要判断它的属性值是否是MemberExpression类型的节点，如果是，那么就是花指令
// 如果是ObjectProperty类型的节点，那么我们就要判断它的value是否是MemberExpression类型的节点，如果是，那么就是花指令
// 如果是AssignmentPattern类型的节点，那么我们就要判断它的right是否是MemberExpression类型的节点，如果是，那么就是花指令
// 如果是FunctionDeclaration类型的节点，那么我们就要判断它的body是否是MemberExpression类型的节点，如果是，那么就是花指令
// 如果是FunctionExpression类型的节点，那么我们就要判断它的body是否是MemberExpression类型的节点，如果是，那么就是花指令
// 如果是ArrowFunctionExpression类型的节点，那么我们就要判断它的body是否是MemberExpression类型的节点，如果是，那么就是花指令
// 如果是ClassMethod类型的节点，那么我们就要判断它的body是否是MemberExpression类型的节点，如果是，那么就是花指令
// 如果是ClassProperty类型的节点，那么我们就要判断它的value是否是MemberExpression类型的节点，如果是，那么就是花指令
// 如果是TSDeclareFunction类型的节点，那么我们就要判断它的body是否是MemberExpression类型的节点，如果是，那么就是花指令
