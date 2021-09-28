"use strict"

let student1 = {
    roll: 101,
    name: "John"
};

let student2 = {
    roll: 201,
    name: "Kim"
};

function Student(roll=0, name="NA"){
    this.roll = roll;
    this.name = name;
}

let s1 = new Student(101, "Fionna");
let s2 = new Student();

class Dish{

    quantity = 0; // attribute of an object

    // constructor method
    constructor(title="NA", price=50){
        this.title = title;
        this.price = price;
        this.quantity++;
    }

    // show method
    show(){
        console.log(this.title+" "+this.price);
        console.log("Quantity is: "+this.quantity);
    }

    get getQuantity(){
        return this.quantity;
    }

    set setQuantity(quantity){
        this.quantity = quantity;
    }
}

let d1 = new Dish("Dal Makhani", 100)
let d2 = new Dish("Paneer Makhani", 200)

d1.setQuantity = 5;

console.log(d1.getQuantity);

d1.show();
d2.show();