// use strict expression
"use strict" // enable strict mode globally
// we will enable the strict mode. which means few error javascript would ignore, but with strict mode enabled, error will be thrown
let a = 1;
console.log("a is: "+a);

function hello(){
    //"use strict" // enable strict mode locally
    b = 1;
}

hello();
