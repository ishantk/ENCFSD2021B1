// Empty Set Object
// let names = new Set();
// console.log("names are: "+names);
// console.log(typeof names);

let names = new Set(["john", "jennie", "jim", "jack", "joe", "jennie"]);
console.log("names are: "+names);   // Object
console.log("names.values() are: "+names.values()); // Iterator

names.add("fionna");
names.add("kia");
names.add("jim");

names.delete("jack")

names.clear()

for(let element of names){
    console.log(element);
}

let employees = new WeakSet();
// WeakSet will allow only Objects

let emp1 = {
    name: "John",
    salary: 100000
}

let emp2 = {
    name: "Harry",
    salary: 200000
}

employees.add(emp1);
employees.add(emp2);
// employees.add(emp1); // duplicacy not supported

//employees.add("john"); // error

let johnsFollowers = new Set(["jim", "harry", "fionna", "joe"]);
let fionnaFollowers = new Set(["kia", "harry", "mike", "joe"]);

function unionOfSets(set1, set2){
    
    // Creating a Set from Another Set
    let set = new Set(set1);

    // for(element of set1){
    //     set.add(element);
    // }
    for(element of set2){
        set.add(element);
    }
    return set;
}

let allFollowers = unionOfSets(set1=johnsFollowers, set2=fionnaFollowers);
for(let element of allFollowers){
    console.log(element);
}

function intersectionOfSets(set1, set2){

    let set = new Set();

    for(let element of set2){
        if(set1.has(element)){
            set.add(element)
        }
    }

    return set;
}

console.log("MUTUAL FOLLOWERS");
let mutualFollowers = intersectionOfSets(set1=johnsFollowers, set2=fionnaFollowers)
for(element of mutualFollowers){
    console.log(element);
}


function differenceOfSets(set1, set2){

    let set = new Set();

    // remove the elements from set1 which are available in set2 :)

    return set;
}