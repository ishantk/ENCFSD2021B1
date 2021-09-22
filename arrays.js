let numbers = [10, 20, 30, 40, 50]  // Implicit Syntax
//let numbers = new Array(10, 20, 30, 40, 50); // Explicit Syntax

numbers[5] = 111;
console.log(numbers[5]);

/*numbers[7] = 222;
console.log(numbers[6]);
console.log(numbers[7]);*/

// Always inser the new element in the end
numbers[numbers.length] = 222;

for(let idx=0;idx<numbers.length;idx++){
    console.log(numbers[idx]);
}

console.log("~~~~~~~~~~");

// Indexing in Array :)
for(idx in numbers){
    console.log(idx);
    console.log(numbers[idx]);
}

function Dish(name="NA", price=0, quantity=1){
    this.name = name,
    this.price = price,
    this.quantity = quantity,
    this.show = function(){
        console.log(this.name+" is priced at \u20b9"+this.price);
        console.log("Quantity: "+this.quantity);
        console.log("Price: "+this.quantity*this.price);
    },
    this.increment = function(){
        this.quantity++;
        Dish.prototype.totalDishes++;
        //Dish.prototype.totalPrice += this.price;
    },
    this.decrement = function(){
        this.quantity--;
        Dish.prototype.totalDishes--;
        //Dish.prototype.totalPrice -= this.price;
    }
    this.upateTotalPrice = function(){
        Dish.prototype.totalPrice += this.quantity*this.price;
    }
}

d1 = new Dish(name="Dal Makhani", price=100);
d2 = new Dish(name="Paneer Makhani", price=300);
d3 = new Dish(name="Noodles", price=150);
d4 = new Dish(name="Burger", price=50);
d5 = new Dish(name="Fries", price=50);

let menu = [d1, d2, d3, d4, d5];

function showDishObject(item, index){
    console.log("~~~~~~~~~~~~~~~");
    item.show()
    console.log("~~~~~~~~~~~~~~~");
}

menu.forEach(showDishObject);

// Bubble Sort :)
// Sort the Dish Objects based on the price :)