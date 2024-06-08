
function hexEnc(code){
    for(var hexStr="",i=0;i<code.length;i++) 
        hexStr+="\\X"+code.charCodeAt(i).toString(16).toUpperCase();
    return hexStr;
}

function unicodeEnc(code){
    for(var unicodeStr="",i=0;i<code.length;i++) {
        // unicodeStr+="\\u"+("0000"+code.charCodeAt(i).toString(16)).substr(-4);
        let text = "0000"+code.charCodeAt(i).toString(16)
        text = text.substring(text.length-4)
        unicodeStr+="\\u"+text;
    }
    return unicodeStr;
}

console.log(hexEnc("hello world"));
console.log(unicodeEnc("hello world"));