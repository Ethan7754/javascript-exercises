const findTheOldest = function(array) {
  const updated = array.map(person => {
    if (person.yearOfDeath === undefined) {
      person = {...person, yearOfDeath: new Date().getFullYear()};
      return {...person, age: person.yearOfDeath - person.yearOfBirth};
    } else {
      return {...person, age: person.yearOfDeath - person.yearOfBirth};
    }
   }
  );
  const oldestToYoungest = updated.sort(({age: a}, {age: b}) => b-a);
  return oldestToYoungest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
