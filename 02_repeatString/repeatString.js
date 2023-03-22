const repeatString = function (str, n) {
    // return str.repeat(n);
    let tempStr = "";
    for (let i = 0; i < n; i++) {
        tempStr += str;
    }
    return tempStr;
};

// Do not edit below this line
module.exports = repeatString;
