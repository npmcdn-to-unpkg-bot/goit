//var base = prompt("Base:", "");
//var exponent = prompt("Exponent:", "");

function customPow(base, exponent) {
    "use strict";
    var result = base;
    var i = 1;

    for (i; i < exponent; i++) {
        result = result * base;
        console.log(result);
    }
    console.log("Result: " + result);
    return result;
}