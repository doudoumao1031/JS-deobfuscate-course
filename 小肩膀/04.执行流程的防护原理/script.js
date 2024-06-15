// 流程平坦化
function test01(){
    var a = 1000;
    var b = a + 2000;
    var c = b + 2000;
    var d = c + 2000;
    var e = d + 2000;
    var f = e + 2000;
    return f
}
// console.log(f)

// 7 5 1 3 2 4 6
// 外面套个循环 for, while
function test02(){
    var arrStr = "7|5|1|3|2|4|6".split('|'), i=0;
    while(!![]){
        switch(arrStr[i++]){
            case '1':
                var c = b + 2000;
                continue;
            case '2':
                var e = d + 2000;
                continue;
            case '3':
                var d = c + 2000;
                continue;
            case '4':
                var f = e + 2000;
                continue;
            case '5':
                var b = a + 2000;
                continue;
            case '6':
                return f;
            case '7':
                var a = 1000;
                continue;
        }
        break;
    }
}
console.log(test02())

// 逗号表达式
// 逗号链接多个表达式形成复合语句
function test03(){
    var a,b,c
    return a=100,
    b=a+200,
    c=b+300,
    c
}

console.log(test03())

var a = (a=100,a+=100)
console.log(a)

function test04(){
    var a,b,c,d
    // 再配合插入些花指令
    return d=(c=(b=(a=100,a+200),b+300),c+400)
}
console.log(test04())

