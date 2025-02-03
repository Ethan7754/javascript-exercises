const leapYears = function(year) {
  if (Number.isInteger(year) === true && ((year % 4 === 0) === true) && (((year % 100 === 0) === false) || ((year % 100 === 0) === true && (year % 400 === 0) === true))) {
    return true;
  } else {
    return false;
  }

};

// Do not edit below this line
module.exports = leapYears;
