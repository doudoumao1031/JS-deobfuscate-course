
function hexEnc(code){
    for(var hexStr="",i=0;i<code.length;i++) 
        hexStr+="\\X"+code.charCodeAt(i).toString(16).toUpperCase();
    return hexStr;
}

function unicodeEnc(code){
    for(var unicodeStr="",i=0;i<code.length;i++) {
        // unicodeStr+="\\u"+("0000"+code.charCodeAt(i).toString(16)).substr(-4);
        // not exnough 4 digits will add 0 in front
        let text = "0000"+code.charCodeAt(i).toString(16) 
        text = text.substring(text.length-4)
        unicodeStr+="\\u"+text;
    }
    return unicodeStr;
}

function stringToBytes(str) {
    var byteArr = [];
    for (var i = 0; i < str.length; i++) {
        byteArr.push(str.charCodeAt(i));
    }
    return byteArr;
}

console.log(hexEnc("hello world"));
console.log(unicodeEnc("hello world"));
console.log(unicodeEnc("豆豆猫"));
console.log(stringToBytes("hello world"));
console.log(stringToBytes("豆豆猫")); // [ 35910, 35910, 29483 ]
console.log(String.fromCharCode(stringToBytes("豆豆猫")))
console.log(String.fromCharCode(35910, 35910, 29483)) // 豆豆猫