const palindromes = function (str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
// console.log(palindromes("racecar"));
// console.log(palindromes("hello"));
// Do not edit below this line
module.exports = palindromes;
