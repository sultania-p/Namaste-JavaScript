// block => {} 
// Compound STatement  -- many statements into one group
if (true) 
 // block is used when a js expects single statement
 // But we need to write multiple statements to perform an operation
{
    var a = 10;
    console.log("block statement");
    console.log(a);
}

console.log("-------");

// let and const are hoisted as block scoped while var is global scoped
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a, b ,c);
}
console.log(a);
console.log(b);
console.log(c);

// shadowing -- overwriting the value of variables for var, let and const inside the block
var a = 10;
let b = 20;
{
    var a = 101;
    let b = 201;
    console.log(a);
    console.log(b);
}
console.log(a); // global scope
console.log(b); // script scope

print("-----")

