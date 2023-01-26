
// Function Statement aka Function Declaration
function a() {
    console.log("Function Statement!!");
}

// Function Expression
var b = function () {
    console.log("Function Expression!!");
}

a();
b();
// Note: Difference between fn statement and expression (declared and assigned as variable) is Hoisting

// Anonymous Function -- Function without name --> Mostly used when functions are used as value -- and can be assigned to varaible
// function () {
//     console.log("Anonymous Function!!");
// }

// Named Function Expression -- when we defined the function name in Function Expression
// Here the function has not been created in global scope so cannot be access in global exection context
var c = function nfe() { 
    console.log("Named Function Expression!!")
}
c();

// Parameters and Arguments
function d(param1, param2) {
    console.log(param1 + " " + param2)
}
d(arg1 = "Hello", arg2 = "World")

// First class Functions --> using functions as arguments/values inside any function
// for parsing as argument or return as value from function += first class citizens
function e(param1) {
    console.log(param1);
}
e(function f () {
    console.log("first class function as argument!")
})

// 