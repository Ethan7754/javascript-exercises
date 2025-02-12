const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  const summed = array.reduce((total, currentValue) => total + currentValue, 0);
  return summed;
};

const multiply = function(array) {
  const multiplied = array.reduce((total, currentValue) => total * currentValue);
  return multiplied;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  if (num > 0 && num !== 1) {
	  for (let i = num - 1; i > 0; i--) {
      num *= i; 
    }
    return num;
  } else {
    return 1;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
