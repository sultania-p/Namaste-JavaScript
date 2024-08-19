// scope chain and lexical environment
// Lexical - local memory + lexical env of parent, lexical - in a sequency or hierarchy


function a() {
    
    b();
    function b() {
        c();
        function c() {
            console.log(x)
        }
    }
}

// var x = 10;
a();