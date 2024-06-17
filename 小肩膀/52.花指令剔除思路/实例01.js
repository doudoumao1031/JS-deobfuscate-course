function ME(arguments) {
    var Z = Z;
    var Z = Z;
    if (!MN(arguments)) return arguments;
    var LV = function (Ey) {
        var Z = Z;
        var Z = Z;
        {
          return Ey["replace"](/^CAkQ(xzA|C3z|2Q5)/, '');
        }
      }(arguments),
      WF = LV["length"] % 0x4 > 0x0 ? 0x4 - LV["length"] % 0x4 : 0x0;
    if (WF > 0x0) for (var b0 = 0x0; b0 < WF; b0++) LV += '=';
    return LV;
}

// 解码为
function ME(input) {
    // MN is assumed to be a function that checks something about the input
    if (!MN(input)) return input;

    // Remove the specified prefix if it matches
    var LV = input.replace(/^CAkQ(xzA|C3z|2Q5)/, '');

    // Calculate the number of padding characters needed
    var WF = LV.length % 4 > 0 ? 4 - LV.length % 4 : 0;

    // Add padding characters if needed
    if (WF > 0) {
        for (var b0 = 0; b0 < WF; b0++) LV += '=';
    }

    return LV;
}
