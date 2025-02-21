
const palindromes = function (str) {
  let replacedString = str.replaceAll(/\p{P}/ug, "");
  let replacedString2 = replacedString.replaceAll(" ", "");
  let initialArray = replacedString2.split("");
  let reversedArray = initialArray.reverse();
  let reversedString = reversedArray.join("");
  if (replacedString2.toLowerCase() === reversedString.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
