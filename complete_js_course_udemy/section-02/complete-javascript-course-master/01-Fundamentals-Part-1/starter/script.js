/* Notes: --
Datatypes Primitive in JS - Number, String, Boolean, Undefined,
    Null, Symbol, Bigint
*/

/*
let js = 'amazing';
// if (js === 'amazing') alert('javascript is fun!!');
console.log(40 + 3 - 3 + 6);
console.log('Piyush');
console.log(23)

let firstName = "Mark Jonas" // declaration of variable
console.log(firstName);

let _lastName = "Dunham"
console.log(_lastName);

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob, myCurrentJob);

let IsCold = true
console.log(IsCold);

// Typeof Operator..
console.log("------");
console.log(typeof true);
console.log(typeof "Hello");
console.log(typeof 10);
console.log("------");

// Dynamic Typing.
let isCold = "Yes"
console.log('new datatype is ' + typeof isCold);

// undefined type
let year;
console.log(year);
console.log(typeof year);

console.log("After assigning value...");
year = 1111;
console.log(year);
console.log(typeof year);
console.log(typeof null);

// let - only when the varibale is supposed to change,
// const - when the variable is fixed and never changing
let age = 10;
age = 11;
console.log(age);

const birthYear = 1992;
// birthYear = 1993;   // not allowed..
console.log(birthYear);

var profession = "Teacher"; //mutable
profession = "Coder";
console.log(profession);

// Operators...
const now = 2037;
const ageJonas = now - 1993;
const ageSarah = now - 2013;
console.log(ageJonas, ageSarah, 'age difference', ageJonas - ageSarah);
console.log(ageJonas / 2, ageSarah * 2, 2 ** 3); // exponenent operator

const firstName = "Piyush";
const lastName = "Sultania";
console.log(firstName + ' ' + lastName);

// assignment operators
let x = 10 + 5;
x += 10
x *= 2;
x++;    // add by 1
x--;    // decrease by 1
console.log(x); // = is assignment operator

// compariosn operators
console.log(ageJonas > ageSarah);
console.log(ageJonas >= ageSarah);
console.log(ageSarah <= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1993 > now - 2013);


// precedence Operators:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
let a, b;
a = b = 20 - 2 - 3;
console.log(a, b);

const now = 2037;
const ageJonas = now - 1993;
const ageSarah = now - 2013;

const averageAge = (ageJonas + ageSarah) / 2    //precedence of div over addition
console.log(ageJonas, ageSarah);
console.log('average age: ', averageAge);


//////////////////////////////////
// Coding Challenge #1

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / heightJohn ** 2;
console.log('Mark BMI : ' + BMIMark + ', ' + 'John BHI : ' + BMIJohn)

let markHigherBMI = BMIMark > BMIJohn
console.log(markHigherBMI);

// Strings and Literals
const firstName = "Piyush";
const job = "Data Engineer";
const birthYear = 1993;
let age = new Date().getFullYear() - birthYear

const desc = "I'm " + firstName + ', a ' + age + ' years old ' + job + "!";
console.log(desc);

// using template literals
const descNew = `I'm ${firstName}, a ${age} years old ${job}!`;
console.log(descNew);

console.log(`Just a regular String!!!`);
console.log(`Hello! My name is ${firstName} and I'm ${age} years old!!`)

console.log('Strring with \n\
multiple \n\
lines');

console.log(`String with
multiple lines
using literal`);


// If-else statements...
const age = 14;

if (age >= 18) {
    console.log("Piyush can start driving license 🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`Piyush is too young 🚫. Wait for ${yearsLeft} years to start driving`)
};  // control structure

const birthYear = 2011;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

//////////////////////////////////
// Coding Challenge #2
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / heightJohn ** 2;
console.log('Mark BMI : ' + BMIMark + ', ' + 'John BHI : ' + BMIJohn)

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else if (BMIMark < BMIJohn) {
    console.log(`John's BMI (${BMIJohn})is higher than Mark's (${BMIMark})!`)
} else {
    console.log("Both Mark and John have same BMI!")
}

// Type Conversions (user conversion) and Type Coercion (JS)
const inputYear = '1991';
console.log(inputYear + 18);    // convert 18 into string from number
console.log(Number(inputYear), inputYear);

console.log(Number('Hello'));   // NaN - Not a Number Invalid
console.log(typeof (NaN))

console.log('Hello' + String(23));  // convert to string
console.log(String(20), 20);
console.log('I am ' + 20 + ' years old!') // type coercion
console.log('I am ' + String(20) + ' years old!');
console.log('23' * '2');

// Boolean Conversions
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Donot spend it at all!")
} else {
    console.log('Get a job asap!!')
}

let height;
if (height) {
    console.log("Yay! Height is defined!")
} else {
    console.log("Height is UNDEFINED!")
}

// Equality Operators
// === --> Strict comparison, no type coercion, == -> type cooercion (loose compare)
const age = 18;
if (age === 18) console.log("You just became an Adult!")

console.log('18' == 18);    // type coercion
console.log('18' === 18);   // no type coercion

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log("Cool! 23 is an amazing number! (loose)")
} else if (favourite === 7) {
    console.log("7 is an amazing number as well")
} else {
    console.log("Yikes! Anything apart from 23 & 7 is not so cool!")
}

if (favourite !== 23) console.log("Why not 23?");

// Boolean Logic...
let personAge = 16;
let A = personAge >= 20;
let B = personAge < 30;

console.log(!A);
console.log(A && B);
console.log(A || B);
console.log(!A && B);
console.log(A || !B);

const hasDriversLicense = true;
const hasGoodVision = true;
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shoulDrive = hasDriversLicense && hasGoodVision

if (shoulDrive) {
    console.log("Sarah is able to drive 🚘");
} else {
    console.log("Someone else shoudld drive");
}

/////////////////////////////////
// Coding Challenge #3
const scoreDolphins = (97 + 112 + 81) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log("Koalas win the trophy 🏆");
} else {
    console.log("Both win the trophy!");
}

// BONUS Questions
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log("Koalas win the trophy 🏆");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log("Both win the trophy!");
} else {
    console.log("No one wins the trophy! 😔");
}
*/
/*

// Switch statement
const day = 'wednesday';
switch (day) {
    case 'monday':  // strict equality comparison
        console.log("Plan the course structure!");
        console.log("Go to college to attend coding lecture!");
        break;
    case 'tuesday':
        console.log("Prepare the theory videos");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("Write code examples");
        break;
    case 'Friday':
        console.log("Record videos");
        break;
    case 'saturday':
    case 'sunday':
        console.log("Enjoy the weekend :D");
        break;
    default:
        console.log("Not a valid day!");
};

if (day === 'monday') {
    console.log("Plan the course structure!");
    console.log("Go to college to attend coding lecture!");
} else if (day === 'tuesday') {
    console.log("Prepare the theory videos");
} else if (day === 'wednesday' || day === 'thursday') {
    console.log("Write code examples");
} else if (day === 'friday') {
    console.log("Record videos");
} else if (day === 'saturday' || day === 'sunday') {
    console.log("Enjoy the weekend :D");
} else {
    console.log("Not a valid day!");
}

// statements and expressions..
// expr -> prduce a value, 3 + 4, 1993, etc..
// actions in the program, if (23 > 10) const str = "Statement";
console.log(`I'm ${2023 - 1993} years old!`);
*/

// conditional operator (ternary)
const age = 23;
// age >= 18 ? console.log('I\'d like to drink wine 🍷') :
//     console.log('I like to drink water 💧');

const drink = age >= 18 ? 'Wine 🍷' : 'Water 💧';
console.log(drink);

const bachelorsDegree = 'IT';
const mastersDegree = 'CS';

const qualified = bachelorsDegree === 'IT' && mastersDegree === 'CS' ? 'Qualified 🎯' : 'Not Qualified';
console.log(qualified);

console.log(`I like to drink ${age >= 18 ? 'Wine 🍷' : 'Water 💧'}`);

// ES5  -  new features version 2009  .. ECMAScript 5 // Support in al web browsers
// Bable to transpile and polyfil the code -->> Production deployment
// ES6 -- >> ESNext (future version)

















/////////////////////////////////
/* Assignments */
/*
const country = "United States";
const continent = "North America";
const isIsland = false
let language = "English";
let population = 20;

console.log("country: ", country,
    "| continent: ", continent,
    "| population: ", population);

console.log(typeof isIsland,
    typeof population,
    typeof country,
    typeof language);

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);

const description =
    country + ' is in ' + continent +
    ', and its ' + population + ' million people speak '
    + language
console.log(description)
*/