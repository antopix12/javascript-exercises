const palindromes = function (str) {

  let filteredArr = str.toLowerCase().split("").filter(char => /[a-z0-9]/.test(char));
  let filtered = filteredArr.join("");
  let result = filteredArr.reverse().join("") === filtered;

  return result;
};


// Do not edit below this line
module.exports = palindromes;
