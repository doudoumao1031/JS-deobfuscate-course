// 字典序混淆
// var bigArr = ['Date', 'getTime', 'log']
// console[bigArr[2]](new window[bigArr[0]]()[bigArr[1]]()) 

// String.fromCharCode 混淆
// 这里涉及原型链constructor调静态方法
// hello world
console.log(""['constructor']['fromCharCode'](104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100))
// 内容本身还可以加密 比如说引入前面的字典

// 数组乱序
var arrObj = [1, 2, 3, 4, 5];
(function(arr, num){
    console.log(arr, num)
    var shuffer = function(nums){
        console.log(arr)
        while(--nums){
            arr.unshift(arr.pop())
        }
    }
    shuffer(++num)
}(arrObj, 0x20))
console.log(arrObj)

// 表达式 花指令 以下两种等效 
function _0xklajdsflkji(a,b){
	return a + b;
}
_0xklajdsflkji(new Date().getMonth(), 1)

new Date().getMonth() + 1

// 函数 花指令 以下两种等效 
function _a(a,b,c){
	return a(b,c)
}
function _b(a,b,c){
	_a(a,b,c)
}
str = _b(
	str.replace,
	/MM/,
	(this.getMonth()+1)>9?'a':'b'
)

str = str.replace(/MM/, (this.getMonth()+1)>9?'a':'b')

// ### jsfuck

// (, +, !, [, ], ) 六种表达

// +[] // 0

// !+[] // 1 

// 分段还原执行