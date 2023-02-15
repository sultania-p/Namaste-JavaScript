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

// Coding Challenge:
const calcAverage = (a, b, c) => (a + b + c) / 3;

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win the trophy 🏆 (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        // console.log(scoreDolphins, scoreKoalas);
        console.log(`Koalas win the trophy 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins the trophy 😔`);
    }
}

// Test 1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
checkWinner(avgDolphins, avgKoalas);

// Test 2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);

// Arrays Data Structures --
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1992, 1984, 2023);

// access the array elements
console.log(friends[0]);
console.log(years[1]);

console.log(`Number of elements in array is:`, friends.length);    // property
console.log(`Last element in array is:`, friends[friends.length - 1]);

// mutate the array
friends[2] = 'Jay'
console.log(friends);

// cannot change the entire array
// friends = ['Bob', 'Marley'];

const firstName = 'Jonas'
const lastName = 'Smith'
const jonas = [firstName, lastName, 2037 - 1991, 'teacher', friends]
console.log(jonas);
console.log(jonas.length);

// function for arrays
const calcAge = function (birthYear) {
    return 2037 - birthYear
}
const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

// adding ages in array
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

// Array Operations/methods
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');    // add elements in array
console.log(friends);
console.log(newLength);

friends.unshift('John');    // add element to beginning of array
console.log(friends);

// remove elements from array
friends.pop(); // Last
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();    // First
console.log(friends);

console.log(friends.indexOf('Steven')); // Return Index posiiton of element
console.log(friends.indexOf('Bob')); // -1 if not exists

// true if element exists else false.. strict equality
friends.push(23)
console.log(friends);
console.log(friends.includes('Michael'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}


// COding Challenge -2
const calcTip = function (billAmount) {
    return billAmount >= 50 && billAmount <= 300 ? billAmount * 0.15 : billAmount * 0.2;
}
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(totals);

// Objects Data Structure
// key: value
// jonas has property - firstName, lastName, age etc..
// order of elements does not matter as key are used to retrieve
// Unstructured data is used
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1993,
    job: 'Treacher',
    friends: ['Michael', 'Peter', 'Steven']
}
console.log(jonas);

console.log(jonas.firstName, jonas.lastName);   // dot notation to retrieve property
console.log(jonas['friends']);    // btracket notation
console.log(jonas['friends'][0]);    // element in array

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
console.log(interestedIn);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn])
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends')
}

// add property
jonas.location = 'New York';
jonas['twitter'] = '@jonasschmedtman'
console.log(jonas);

// "Jonas has 3 friends, and his best friend is called Michael"
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1993,
    job: 'Treacher',
    friends: ['Michael', 'Peter', 'Steven']
}
const challenge = jonas.firstName + ' has ' + jonas.friends.length + ' friends, and his best friend is called ' + jonas.friends[0]
console.log(challenge);

// OR -- >> mdn operator precedence
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// Object Methods
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1993,
    job: 'Treacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: false,
    
    // define object method/function expression, statement does not work
    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }
    
    // this points to Object calling the method -> Using this. - object oriented programming
    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    
    calcAge: function () {
        this.age = 2037 - this.birthYear;   // add the age property for the object
        return this.age;
    },
    
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`
    }
}
// console.log(jonas.calcAge(jonas.birthYear));   //dot notation
// console.log(jonas['calcAge'](jonas.birthYear));
console.log(`Jonas age is ` + jonas.calcAge() + ' years');
console.log(jonas.age);

// Chalenge
// "Jonas is a 46-year old teacher, and he has a/no driver's license"
console.log(jonas.getSummary());
*/

// Coding Challenge #3
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    // method for BMI calculation
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2)
        return this.bmi
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    // method for BMI calculation
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2)
        return this.bmi
    }
}
// logging
console.log(john.calcBMI());
console.log(mark.calcBMI());

if (john.bmi > mark.bmi) {
    console.log(`${this.} BMI (${john.bmi}) is higher than Mark's (${mark.bmi})`)
} else if (john.bmi < mark.bmi) {
    console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})`)
} else {
    console.log(`Both have same BMI;`)
}








