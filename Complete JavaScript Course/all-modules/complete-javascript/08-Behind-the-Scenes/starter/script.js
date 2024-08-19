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
