// let and const declarations are hoisted
// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

// console.log(a); // a in temporal dead zone; cannot access before initialized
let a = 10
console.log(a); // a = 10 is assigned
var b = 20
console.log(b);

// also works!!
let x;
x = 10;
console.log("value of let x  is:", x);

const c = 30
console.log("Value of const c is", c);

// does not work -->> SyntaxError!! // need to declare and assign at same time for const typ
// const b;
// b = 10

const b = 10;

// TypeError!! sas const type reassigned
const b = 10;
b= 100;
console.log(b);

// ReferenceError! as the variable is not available in Global context is in temporal dead zone still before execution
console.log(z);
let z = 10;