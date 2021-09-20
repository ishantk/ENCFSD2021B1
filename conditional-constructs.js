var prompt = require('prompt-sync')();
let amount = Number(prompt("Enter Amount: "));
let promo_code = prompt("Enter the Promo Code");

/*console.log(promo_code)

if(promo_code == "ZOMATO"){
    console.log("Promo Code Applied");
}else{
    console.log("Promo Code Invalid");
}*/

let proUser = true;
var discount = 0;
var proDiscount = 0;

if(amount > 159){
    if(promo_code == "FLAT75"){
        discount = 75;
        console.log("Promo Code Applied");
    }else{
        console.log("Promo Code Invalid");
    }

    if(proUser){
        console.log("Additional 10% Off for You !!");
        proDiscount = 0.10*amount;
    }
}else{
    console.log("Promo Code Cannot be Applied");
}

console.log(discount);
console.log(proDiscount);
amount = amount - discount - proDiscount;
console.log("Please Pay: "+amount);