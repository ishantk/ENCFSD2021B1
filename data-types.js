/*
    author: ishant.kumar@auribises.com
    description: the file explains the basic data types and conversions
    createdOn: 17 Sept, 2021
*/

/*
    String
    Number
    BigInt
    Boolean
    undefined
    null
    Symbol
    Object
*/

// Its a kind of a constant: IMMUTABLE VARIABLE
let a = Symbol('Hello');
console.log(a);

let employee = {name: "John", age: 30, "email": "john@example.com"};
console.log(employee+" type "+typeof employee);
console.log(employee['name']);

let age = "12";
console.log(age+" "+typeof age);

let numAge = Number(age)
console.log(numAge+" "+typeof numAge);

var x = 10
var y = String(x)
console.log(y+" "+typeof y);
