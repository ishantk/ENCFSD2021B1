const employee1 = {
    name: "John",
    salary: 30000
}

let employee2 = {
    name: "Fionna",
    salary: 30000
}

employee1.salary = 35000
employee2.name = "Fionna Flynn"

/*employee1 = {
    name: "Mike",
    salary: 50000
};*/

console.log(employee1);
console.log(employee2);

employee2.email = "fionna@example.com"
employee2.show = function(){
    console.log(this.name+" has a salary of "+this.salary);
}

console.log(employee2);
employee2.show()

employee1.showEmployee = employee2.show;
employee1.showEmployee();