'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    // JavaScript tried to keep finding the scope fo the below variables in current scope or parent scope till its accessible.
    // It does not look down into child scope rather UP the scope chain (mean parent scope)
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    // block scope -- can declare with const or let only
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(millenial); // var is function scope, so accessible within the function irrespective of blocks
    // console.log(str); // can't access outside of block scope
    // console.log(add(1, 2)); // out of block scope defined, can be access w/ using 'use restrict'
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'John';
calcAge(1991);
// console.log(age); // age is not accessible in scope chain execution context
// printAge(); // function is declared out of execution context so its inaccessible

// Hoisting and the TDZ
// Execution COntext - Variable env., scope chain, this keyword
// Hoisting - Makes some types of variables accessible in the code before they are declared, code scanned for declarations before exetution
// let and const -> NOT Hoisted, stay in Temporal Dead Zone, means cannot be access between current scope beginning and before it is DECLARED
// Example ---
const myName = 'John Doe';

if (myName === 'John Doe') {
  // console.log(`${myName} is a ${job}`); // Lies under TDZ and cannot be accessed using declaration
  const age = 2037 - 1989;
  console.log(age);
  const job = 'Teacher';
  // console.log(x);
}

// more....
// Variables hoising
console.log(me);
// console.log(occupation); // This is in TDZ, ReferenceError
// console.log(year); // This is in TDZ, ReferenceError

var me = 'John';
let occupation = 'Teacher';
const year = 1995;

// FUnctions..
console.log(addDeclaration(2, 3)); // can call before it it is defined
// console.log(addExpr); // lies in TDZ, ReferenceError
// console.log(addArrow); // lies in TDZ, ReferenceError
// console.log(subExpr(5, 2)); // Bcj, function subExpr is declared as a VARIABLE and we cannot call a varialbe with PARAMETERS

function addDeclaration(a, b) {
  // Function Declaration
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b; // arror function declaration

var subExpr = function (c, d) {
  return c - d;
};

var x = 1;
let y = 2;
const z = 3;
console.log(window);
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// The this keyword
// Value is not static and only assigned when the function is called
// Arrow functions do not get this keyword
console.log(this);

const calcAge1 = function (birthYear) {
  console.log(2037 - birthYear);
};
calcAge1(1991);

// Arrow function does not have its own this keywrod so it uses parent context which is GLOBAL context which is lexical this
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

// method borrowing
const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge;
console.log(matilda);
matilda.calcAge();

const f = jonas.calcAge;
console.log(f);
// f(); // just a regular function call and not attached to any object so undefined

// Regular v/s Arrow functions
const john = {
  firstName: 'John',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // solution-1 : resolution to the issue
    // const self = this;
    // const isMillenial = function () {
    //   console.log(this);
    //   console.log(self.year >= 1981 && self.year <= 1996);

    //   // In a call for function inside the method, this keyword is undefined as a rule
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // solution-2 : Using Arrow function
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey, ${this.firstName}`);
  },
};
john.greet();
john.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 4);
addExpr(2, 4, 5, 6);

// using arrow function
var addArrow = (a, b) => {
  console.log(arguments); // in arrow function arguments keyword is not defined
  return a + b;
};
addArrow(2, 3, 4);

// Primitives and Objects
const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend: ', friend);
console.log('Jonas: ', me); // Weird! it updated the aage parameter for the Me object as well...

// primitives -> Number, String, Boolean, Null etc.. -> Primitive types..
// Objects -> Object literal, Arrays etc -->> Reference types
// Objects are References type --> Value of an Identifier in Call Stack is a Reference to a address in Heap. Reference to Memory Address in Heap
// Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log('New LastName:', lastName, '; ', 'Old LastName:', oldLastName);

// On Reference Types - Chaging a property value changes for each referecen to the identifier
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);

// Copying Objects.. Only works for 1st level and creates a Shallow COpy and deep copy for any object inside an obejct is not Cloned and works the way w/o copy
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);
