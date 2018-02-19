'use stirct'

function f() {
    var a = 1;

    a = 2;
    a = 3;
    var b = g();
    

    return b;

    function g() {
        return a;
    }
}

console.log(f());