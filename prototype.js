function Dish(name="NA", price=0, quantity=1){
    this.name = name,
    this.price = price,
    this.quantity = quantity,
    // this.restaurant = "Table By Basant",
    this.show = function(){
        console.log(this.name+" is priced at \u20b9"+this.price);
        console.log("Quantity: "+quantity);
    }
}

let d1 = new Dish();
let d2 = new Dish(name="Dal", price=100, quantity=2);

d1.show()
d2.show()

console.log("Prototype of Dish:"+Dish.prototype);

Dish.prototype.restaurant = "Table By Basant";
console.log("Prototype Restaurant is: "+Dish.prototype.restaurant);

console.log(d1.restaurant);
console.log(d2.restaurant);

// Wrting in Protype will make a new attribute inside the object
// d1.restaurant = "Hot Breads";

// Read Only
console.log("Prototype Restaurant is: "+Dish.prototype.restaurant);
console.log(d1.restaurant);
console.log(d2.restaurant);