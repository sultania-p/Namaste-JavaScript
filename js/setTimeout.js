// setTimeout -- wait time and then printing the value
// function x() {
//     var i =1;
//     setTimeout(function () {
//         console.log(i);        
//     }, 3000);   // in miliseconds
//     console.log("Namaste!")
// }
// x();


// ......issue comes with var as all copies of function refer to same i
// function x() {
//     for(var i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i  * 1000);
//     }

//     console.log("namaste!!")
// }
// x();

// resolved issue using let instead of var .. as let is block scoped
if (1==2) {
    function x() {
        for(let i = 1; i <= 5; i++) {
            setTimeout(function () {
                console.log(i);
            }, i  * 1000);
        }

        console.log("namaste!!")
    }
    x();
}
else;
    /// OR
    function x() {
        for(let i = 1; i <= 5; i++) {
            function close(x) {
                setTimeout(function () {
                    console.log(x);
                }, x  * 1000);
            }
            close(i);
        }

        console.log("namaste!!")
    }
    x();
