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

*/
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