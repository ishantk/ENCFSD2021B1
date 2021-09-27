"use strict"

// let cafeShopName = 'Johns Cafe Shop';
// let cafeShopName = 'John\'s Cafe Shop';
// let cafeShopName = "John's Cafe Shop";
let cafeShopName = `Johns Cafe Shop`;

const user = {
    name: "John Watson",
    age: 20
}

// let sentence = "Welcome User "+user.name+" Your age is: "+user.age;
let sentence = `Welcome User ${user.name} Your age is: ${user.age}`;
console.log(sentence);

let fullName = "John Watson";
console.log(fullName[0]);                   // J
console.log(fullName[fullName.length-1]);   // n

console.log(fullName.charAt(2));            // h

// STRINGS ARE IMMUTABLE
// fullName[0] = 'K'; // ERROR :)
console.log(fullName);

let name1 = "john";
let name2 = "john";
let name3 = new String("john");

console.log(name1 + " "+ typeof name1);
console.log(name2 + " "+ typeof name2);
console.log(name3 + " "+ typeof name3);

// == will check value and not data type
console.log(name1 == name2);
console.log(name1 == name3); 

// === will check both value and data type
console.log(name1 === name2);
console.log(name1 === name3); 

// let cppCode = "#include<iostream.h>"+
//               "int main(){"+
//               "cout<<100;"+
//               "return 0;"+
//               "}";

let cppCode = "#include<iostream.h> \
              int main(){ \
                cout<<100; \
                return 0; \
              }";              

console.log(cppCode);              

// String Methods
let names = "john, jennie, jim, jack, joe";
console.log(names);
console.log(names.length);

// Strings are IMMUTABLE. They cannot be changed
// If you perform any manipulation operation on Strings, you will get  new String in the memory
let upperCaseNames = names.toUpperCase();
console.log("names now are: "+names);
console.log("upperCaseNames now are: "+upperCaseNames);

let moreNames = names.concat(", jeane")
console.log("names after concat are: "+names);
console.log("moreNames after concat are: "+moreNames);

let array = names.split(",");
console.log(array)

for(let element of array){
    console.log(element.trim());
}

let slicedData = names.slice(1, 6); // start from 1 and go till 5
console.log(slicedData);
