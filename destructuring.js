const student = {
    roll: 101, 
    name: "John", 
    age: 20
}

console.log(student);

// DeStructuring
// i.e. extracting data of object into some variables
// in order to perform some logical operation
// let r = student.roll;
// let n = student.name;
// let a = student.age;

// DeStructuring Assignment
// let {roll, name, age} = student
let {roll, age} = student
console.log(roll);
// console.log(name);
console.log(age);

let{roll: r, name: n, age: a} = student
console.log(r);
console.log(n);
console.log(a);


console.log("Array Destructring");

// Array Destructuring
let promoCodes = ["ZOMATO", "BINGO", "BINGE"]
let [code1, code2, code3] = promoCodes
console.log(code1);
console.log(code2);
console.log(code3);

// Swap Statement
let number1 = 10;
let number2 = 20;

[number1, number2] = [number2, number1]

console.log(number1);
console.log(number2);