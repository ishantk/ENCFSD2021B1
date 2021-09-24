var prompt = require('prompt-sync')();

function Dish(title="NA", price=0, desc="NA"){
    this.title = title;
    this.price = price;
    this.description = desc;
    this.quantity = 0;
}

let dish1 = new Dish(title="veggie burger", price= 100, desc="Veggie Delight Burger")
let dish2 = new Dish(title="aaloo tikki", price= 50, desc="Veggie Tikki Burger")
let dish3 = new Dish(title="fries", price= 70, desc="Fresh Fries")
let dish4 = new Dish(title="ice cream", price= 80, desc="Vanilla Ice Cream")
let dish5 = new Dish(title="roll", price= 30, desc="Veggie Roll")

let menu = new Map();
menu.set(dish1.title, dish1)
menu.set(dish2.title, dish2)
menu.set(dish3.title, dish3)
menu.set(dish4.title, dish4)
menu.set(dish5.title, dish5)

let restaurnat = {
    name: "Mc Donalds",
    address: "Ansal Plaza, Ludhiana",
    menu: menu
}

/*let restaurnat = {
    name: "Mc Donalds",
    address: "Ansal Plaza, Ludhiana",
    menu: new Map().set(dish1.title, dish1)
}*/

console.log(restaurnat);

cart = []
let totalPrice = 0;

while(true){
    let dish = prompt("Enter the Dish You wish to Add / Quit to Exit: ");
    if(dish == "quit"){
        break;
    }
    
    let quantity = parseInt(prompt("Enter Quantity for "+dish));

    console.log(dish);
    console.log(quantity);

    let dishFromMenu = menu.get(dish);
    dishFromMenu.quantity = quantity;

    totalPrice += dishFromMenu.price * dishFromMenu.quantity;

    cart.push(dishFromMenu);
}

console.log("Final Cart ["+cart.length+"]");
console.log(cart);
console.log("TOTAL TO PAY: \u20b9"+totalPrice);

/*
    Edge Cases:
        1. If dish is not found in the Menu, show an error message
        2. Show the Dishes in number i.e. if 2 dishes with 2 quantities each, show 4
*/
