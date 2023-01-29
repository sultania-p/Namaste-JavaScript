// JS - Synchronous SIngle Threaded Language
// Main Thread available only, Line by Line execution
// Browser => JS Engine => Call Stack => GEC/Function

// SUperpowers (Web APIs) of BROWSER** => Gives the ability to JavaScript to use these features in ClassStack/JS Engine
// Browser wrapped all these features inside the "Window" global object
    // setTimeout()
    // DOM APIs
    // fetch()
    // Local Storage
    // console
    // Location

// JS access these Web API inside the Call Stack using the "Window" global object

/***
 * For setTimeOut - The function is kept on hold for the timeout duration (5 secs lets say as below)
 * Once the timer is expired, the setTimeout API will push this callback function (cb) inside the Callback Queue
 * Eventloop is like a gate keeper and it will keep on checking call stack and if there is any callback function to perform in callback queue
 * It will find the callback function in callback queue and push it to call stack for code execution
 * Once the call stack gets the event it wil quickly execute and move to next execution context if any!! 
 */

/* --------
console.log("Start program....")

setTimeout(function cb() {
    console.log("callback...waiting")
}, 5000);

console.log("end program...")
*/

// -------------------------
// .addEventListener will add the callback function in browser and add the event Click to it and move to next event

/*
console.log("start program...")

document.getElementById("button")
        .addEventListener("click", function cb () {
            console.log("Callback...")
        });

console.log("end program...")
*/

console.log("start....")

setTimeout(function cbT() {
    console.log("CB setTimeOut");
}, 5000);
 
fetch("https://api.netflix.com")
.then(function cbF () {
    console.log("CB Netflix..");
});

console.log("end...")

// Note: Microtask Queue takes precedence over Call back queue for function exection
// microtask queue --> holds callback fetch (responses form web servers) as it has promises context.. example
// EventLoop ** Keeps on checking the Call Stack status first if its freed of Global Execution Context or not
    // It will not push the callback functions from callback queue or micro task queue to call stack if call stack is not available (empty call stack)
    // Callback Functions coming from Promises and Mutation Observers goes into Micro Task Queue!!!!!
    // Starvation of callback Queue -- If callback functions in micro task queue creates sub tasks (recusrively) inside it then callback queue does not gets chance to 
    //                                  execute the function inside it. This is called STARVATION of callback queue!!!
    // 


