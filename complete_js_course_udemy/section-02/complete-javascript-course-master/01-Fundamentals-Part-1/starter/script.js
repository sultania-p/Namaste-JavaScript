/* Notes: --
Datatypes Primitive in JS - Number, String, Boolean, Undefined,
    Null, Symbol, Bigint
    */

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
const ageSarah = now - 1992;
console.log(ageJonas, ageSarah, 'age difference', ageJonas - ageSarah);



// Assignment --
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


