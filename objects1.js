// Object is a Multi Value Container
// It stores the data as key/attribute value pair :)

function show(student){
    console.log(student.name+" can be contacted at "+student.email);
}

let student1 = {
    roll: 101,
    name: "John Watson",
    email: "john@example.com",
    show: function(){ // method
        console.log("Student");
    }
};

let student2 = {
    roll: 201,
    name: "Fionna Flynn",
    email: "fionna@example.com",
    address: "Redwood Shores"
};

show(student1);
show(student2);

console.log(student1);
console.log(typeof student1);

console.log(student2);
console.log(typeof student2);

console.log(student1.roll+" "+student1.name);
console.log(student2['roll']+" "+student2['name']);

// For Each Loop
for(key in student1){
    console.log(key);
    console.log(student1[key]);
}


// Nested Object
let restaurant = {
    name: "Table By Basant",
    phone: '+91 99999 11111',
    ratings: 4.5,
    address:{
        adrsLine: "Feroze Gandhi Market",
        city: "Ludhiana",
        state: "Punjab"
    },
    menu:[
        {
            name: "Dal Makhani",
            price: 200
        },
        {
            name: "Paneer Makhani",
            price: 300
        }

    ],
    // show: function() is now a method
    show: function(){
        let name = "John";
        let phone = "+91 99999 42411";
        console.log(name+" can be contacted at "+phone);
        console.log(this.name+" can be contacted at "+this.phone);
        console.log("this is: ");
        console.log(this);
    }
}

console.log(restaurant);
restaurant.show();

// this is a reference variable which we use inside the object to refere the attributes of object