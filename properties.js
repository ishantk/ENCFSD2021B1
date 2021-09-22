const product = {
    title: "iPhone 13",
    price: 70000,
    brand: "Apple",
    // Getter Property
    get getTitle(){
        // Here we can write some logic before we return title
        return this.brand+" "+this.title;
    },
    set setTitle(title){
        // We can check for any validation
        this.title = title+" :)";
    }

}

// product.title = "iPhone 13 Pro";
console.log(product.title);

console.log(product.getTitle);// this seems getTile is an attribute
// But in actual it is a getter function :)

product.setTitle = "iPhone 13 Pro"
console.log(product.title);
console.log(product.getTitle);

console.log("~~~~~~~~~~~~~~");

let driver = {
    name: "John",
    status: true,
    cabNumber: "PB10AB1234",

    set setCabNumber(number){
        if(number.length<10){
            console.log("Invalid Number");
        }else{
            this.cabNumber = number;
        }
    },
    get getName(){
        if(this.name.length != 0){
            return this.name;
        }else{
            return "Name Not Available";
        }
    }
}

driver.name = "John Watson";
driver.cab = "PB10";
console.log(driver.name);