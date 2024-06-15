Function.prototype.construct_ = Function.prototype.construct
Function.prototype.construct = function(aArgs) {
    if(aArgs === 'debugger') {
        return function() {}
    }
    return Function.prototype.construct_(aArgs)
}

window.setInterval_ = setInterval;
setInterval = function(a, b) {
    if(a.toString().includes('debugger')) {
        return function() {}
    }
    return window.setInterval_(a, b)
}
