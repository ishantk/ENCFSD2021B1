let menu = new Map();
menu.set("dal", 100);
menu.set("noodles", 200);
menu.set("burger", 150);

console.log(menu);
console.log(typeof menu);

// In JS either we have primitive or objects :)
let dish = menu.get("burger");
console.log(dish);

let dishes = new Map();
dishes.set("dal", {
    title: "Dal Makahni", price: 100, description: "Black Lentils"
});

dishes.set("paneer", {
    title: "Paneer Makahni", price: 200, description: "Cottage Cheesse Cubes"
});

console.log(dishes);
dish = dishes.get("paneer")
console.log(dish);
console.log(dish.title);