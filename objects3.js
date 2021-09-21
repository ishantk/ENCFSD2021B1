const dish1 = {
    name: "Dal Makhani",
    price: 100,
    description: "Black Lentils Cooked Overnight"
}

const dish2 = {
    dishName: "Paneer Makhani",
    price: 200,
    decsription: "Cottage Cheese with Indian Gravy"
}

let show = function(){
    console.log("~~~~~~~~~~~~~~~~~~~~~~");
    console.log(this.name+" is priced at "+this.price);
    console.log(this.decsription);
    console.log("~~~~~~~~~~~~~~~~~~~~~~");
}

dish1.show = show
dish2.show = show

dish1.show()
dish2.show()

// Objects they do not have a standard way of attributes and value pair

// Constructor Functions

/*function Dish(){
    this.name = "NA",
    this.price = 0,
    this.description = "NA"
}*/

// Constructor Functions
// They are to implement Standardization for Objects
function Dish(name="NA", price=0, description="NA"){
    this.name = name,
    this.price = price,
    this.description = description
    this.show = function(){
        console.log(this.name+" is priced at "+this.price);
    }
}

// new operator will create the object in memory
let d1 = new Dish();
let d2 = new Dish(name="Dal Makhani", price=100, description="Black Lentils");

console.log(d1);
console.log(d2);

// d1 and d2 are not objects
// d1 and d2 are reference variables
// they will hodd the HashCode of Object

// new is an operator
// it will create the Object at RUN TIME in Heap Area

d1.show();
d2.show();