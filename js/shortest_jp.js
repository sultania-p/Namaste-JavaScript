var a = 10;
function b() {
    var x = 10;
}

// window and this are both considered as global object
// anything not defined inside the function is considered as global object and can be accessed via window.* or this.*

console.log(window.a)
console.log(x)
console.log(this.a)