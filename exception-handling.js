"use strict"

/*
    Error                   | Parent
        ReferenceError      | Children
        TypeError
        etc...

*/

var prompt = require('prompt-sync')();

console.log("MyApp Started");

// Errors in JS will always be Run Time Errors
// Whwnever we will run our JS Code, we will get error at that time

// let prizeMoney = {
//     maxPrize: 10000,
//     minPrize: 100
// }

const DEBUG_MODE = false

let prizeMoney = 10000;
let luckyNumber = parseInt(prompt("Enter Your Lucky Number: "))
console.log("Lucky Number is: "+luckyNumber);
console.log(typeof luckyNumber);

let cashBack = 0;

try{
 cashBack = prizeMoney.trim() / luckyNumber;
 }catch(error){
    if(DEBUG_MODE){ // Clean Code
        console.log(error);
    }else{
        console.log("Something Went Wrong");
    }
}finally{
    console.log("DB CONNECTION CLOSING...");
}
console.log("CashBack Earned is: "+cashBack);

console.log("MyApp Finished");

// Run Time errors will terminate the programs abnormally :)