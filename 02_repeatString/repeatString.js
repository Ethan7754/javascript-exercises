function repeatString(string, num) {
  let result = string;
  for (let i = 1; i < num; i++) {
     result += string;
  }
  return result;
}

 const repeatedString = repeatString("hey", 3);

//o not edit below this line
module.exports = repeatString;
