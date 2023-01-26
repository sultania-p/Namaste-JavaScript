// closures - function bundled with its lexical scope (function + lexical scope == closures)
function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z)

// ....

z();    // even x is executed and removed form call stack it knows the reference to var a
