const fibonacci = function(num) {
  const array = [];
  for (let i = 0; i < 100; i++) {
    if (array.length === 0 || array.length === 1) {
      array.push(1);   
    } else {
      array.push(array[array.length - 1] + array[array.length - 2]);
    }
  } 
  if (num === 0 || parseInt(num) === 0) {
    return 0;
  } else if (num < 0) {
    return "OOPS";
  } else if (typeof num === "string") {
    return array[parseInt(num) - 1];
  } else {
    return array[num - 1];
  }
};
  

// Do not edit below this line
module.exports = fibonacci;
