const palindromes = function (str) {
  let cleanString = str.replace(/[^\w]|_/g, "")
  return cleanString.toLowerCase().split("").reverse().join("") === str.toLowerCase().replace(/[^\w]|_/g, "");
};

// Do not edit below this line
module.exports = palindromes;
