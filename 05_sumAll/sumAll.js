const sumAll = function(numStart, numEnd) {
  let sum = 0;
  if (numStart < 0 || numEnd < 0) {
    return 'ERROR';
  }
  
  if (Number.isInteger(numStart) === false || Number.isInteger(numEnd) === false) {
    return 'ERROR';
  }

  if (Number.isNaN(numStart === true) || Number.isNaN(numEnd) === true) {
    return 'ERROR';
  }

  if (numStart < numEnd) {
    for (let i = numStart; i <= numEnd; i++) {
      sum += i;
    }
    return sum;
  } else if (numStart > numEnd) {
    for (let i = numEnd; i <= numStart; i++) {
      sum += i;
    }
    return sum;
  }
}



// Do not edit below this line
module.exports = sumAll;
