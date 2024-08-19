// Remember, we're gonna use strict mode in all scripts now!
/*
'use strict';

const x = 21;

const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1993));

// Coding .. Do StackOverflow, GOogle,
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);
*/

// Debugging
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // Fix the String to Number
    value: Number(prompt('Degree celsius: ')),
  };

  console.log(measurement);
  console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());
