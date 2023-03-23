const reverseString = function (str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
};

// Windows Test
// Windows second test

// Do not edit below this line
module.exports = reverseString;
