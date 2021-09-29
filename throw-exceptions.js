/*
    take phone number as input
    generate a  digit OTP
    show it to the user to fill in that OTP
    if user fills the correct OTP, show user a message i.e. welcome
    if user is trying unsuccesfull attempts > 3 show him some error message
*/

"use strict"

var prompt = require('prompt-sync')();

function authenticate(){
    let phone = prompt("Enter Phone Number")
    let sentOtp = 1411 // Use JS Built in Random Module :)
    console.log("OTP Sent: "+sentOtp+" on phone: "+phone);
    let otp = prompt("Enter 4 Digit OTP Sent to You")

    // Math.floor()
    // Math.ceil()
    // console.log(Math.random()*1000);

    let attempts = 0;

    while(sentOtp != otp){
        attempts++;
        otp = prompt("Enter OTP Again: ")

        if(attempts == 2){
            //break;
            let error = new Error("INVALID ATTEMPTS !!");
            throw error;
        }
    }
}

function welcome(){
    console.log("Welcome to the App");
    console.log("This is Your Home Page");
}


console.log("APP STARTED");

try{
    authenticate();
    welcome();
}catch(error){
    console.log("Something Went Wrong");
    console.log(error);
}


console.log("APP FINISHED");