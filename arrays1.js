/*
    Arrays in Java are dynamic arrays
*/

// Array with Literal
let subjects = ["Physics", "Chemistry", "Maths"]
let numbers = new Array(90, 80, 70)
//numbers = [80, 100, 90]

console.log(subjects);
console.log(typeof subjects);

console.log(numbers);
console.log(typeof numbers);

let cart = []
// cart[0] = "Apples";
// cart[1] = "Mango";
// cart[4] = "Pineapple";

// cart[cart.length] = "Apples"
// cart[cart.length] = "Orange"

cart.push(10)
cart.push(20)

console.log(cart);

//let data = [10, 20, 30, 40, 50]
let data = [10, "John", 30, "Fionna", 50, 7.7, true];

console.log(data[0]);
console.log(data[3]);

let students = []

// Add in End
students.push("John")
students.push("Fionna")
students.push("Kim")
students.push("Ana")
students.push("Brio")
students.push("Dave")

// Add in Beginning
students.unshift("Lee")
console.log(students);

// Update data in Array
students[1] = "John Watson"
console.log(students);

let student = students.pop()
console.log(students);
console.log("Student Popped Was: "+student);

student = students.shift()
console.log("Student Shifted Was: "+student);

students.sort()

console.log(students);

let index = students.indexOf("Fionna")
console.log("Index of Fionna is: "+index);

// let slicedStudents = students.slice(2);
let slicedStudents = students.slice(1, 4);
console.log(slicedStudents);
console.log(students);

let parents = ["Tim", "Hanna", "George"]
let all = students.concat(parents);
console.log(all);

let name = "John"
let myName = name; // Reference Copy
console.log(name+" "+myName);

myName = "John Watson"
console.log(name+" "+myName);

let array1 = ["John", "Jack"]
let array2 = array1 //Reference Copy

array2[1] = "Fionna"

console.log(array1);
console.log(array2);

array2 = ["Sia", "Kim", "Jane"];
console.log(array1);
console.log(array2);