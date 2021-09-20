/*
    Function    

    f(x) = x*x + 1
    name, input and definition

    function solves a problem
*/

let x = 10;

// creation statement
function f(x){
    let result = x*x + 1;
    console.log("result is:"+result);
    //return;
}

function f1(x){
    let result = x*x + 1;
    return result;
}

f(10); // execution statement
let output = f1(-2);
console.log("Output is:"+output);


function bye(name){
    console.log("Bye "+name);
    return "Thank You";
}

function hello(name){
    console.log("Hello "+name);
    bye(name+" Watson"); // Nesting of Fucntions -> Execution Behavior
}

hello("John");

function addNumbers(a, b){
    //let sum = a+b;
    //return sum;
    return a+b;
}

// Reference Copy
let sum = addNumbers;
console.log("Result is:"+sum(10, 20));

//  Function Expressions
let multiply = function(num1=2, num2=3){
    return num1 * num2
};

console.log("Multiplication of -2 and -5 is: "+multiply(-2, -5));
console.log(multiply(num2=5, num1=2));
console.log(multiply()); // 6
console.log(multiply(num1=10));