const findTheOldest = function(arr) {
  
  const result = arr
          .sort( function(a, b) { 
            let nextPerson = b.yearOfDeath - b.yearOfBirth;
            let previousPerson = a.yearOfDeath - a.yearOfBirth;
            if(!a.yearOfDeath ) {
               previousPerson = new Date().getFullYear() - a.yearOfBirth;
            }
            if(!b.yearOfDeath) {
               nextPerson = new Date().getFullYear() - b.yearOfBirth;
            }
            return nextPerson - previousPerson;
          });

  return result[0];
};

// Do not edit below this line
module.exports = findTheOldest;
