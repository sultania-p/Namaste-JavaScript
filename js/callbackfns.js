// Callback Functions in Javascript - Fuctions which are parsed as arguments are callback functions
// function x(param1) {
//     console.log(param1)
// }
// x(function y(){
//     console.log('Callback Function!!')
// });

console.log("---------");
// Javascript callback functions give power to work in asynchronous manner
// does not wait for setTimeout
setInterval(function () {
    console.log("timer!!")
}, 5000);

function x(y) {
    console.log("x")
    y();
}
x(function y(){
    console.log("y")
});







