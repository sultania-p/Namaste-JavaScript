// Strict Mode -- activate in JS to write secure JS code
// avoiding bugs in the code // visible errors
'use strict';
/*
let hasDriversLicense = false;
let passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// reserved keywords not used as variables;
// const interface = 'Audio';
const private = 12;

// Functions..
// functions takes "parameters" as input data
function fruitProcessor(apples, oranges) {
    // functiom body
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples 🍎 and ${oranges} oranges 🍊.`
    return juice
}
// invoke/calling/running the function, parse the values as "arguments" to functions
const juice = fruitProcessor(3, 4);
console.log(juice)
//or
console.log(fruitProcessor(3, 4));

// buil-in function
console.log(Number('23'));

// function decalaration
function calcAge1(birthYear) {  // birthYear -> Parameter, 1993 -> argument
    const age = 2034 - birthYear;
    return age
}
const age1 = calcAge1(1993);
console.log(`Person age is ${age1} years (function declaration)`);

// function expression
const calcAge2 = function (birthYear) {
    return 2034 - birthYear
}
const age2 = calcAge2(1993);
console.log(`Person age is ${age2} years (function expression)`);

// Arrow functions
const calcAge3 = birthYear => 2034 - birthYear;
const age3 = calcAge3(1993);
console.log(`Person age is ${age3} years (arrow functions)`);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years!`
}
console.log(yearsUntilRetirement(1993, 'Piyush'));

// Functions calling other funcs
function fruitCutter(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    // functiom body
    const applePieces = fruitCutter(apples);
    const orangePieces = fruitCutter(oranges);
    const juice = `Juice with ${applePieces} pieces of apples🍎 and ${orangePieces} pieces of oranges🍊`
    return juice
}
console.log(fruitProcessor(2, 3));
*/

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years!`;
    } else {
        return `${firstName} has already retired! 🎉`
    }
}

console.log(yearsUntilRetirement(1993, 'John Smith'));
console.log(yearsUntilRetirement(1950, 'James Mendis'));









