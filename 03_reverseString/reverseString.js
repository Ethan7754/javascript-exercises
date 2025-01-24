const reverseString = function(string) {
  let initialArray = string.split("");
  let reversedArray = initialArray.reverse();
  let reversedString = reversedArray.join("");
  return reversedString;
};

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;

