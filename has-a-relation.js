class User{
    constructor(name, phone, email, addresses){
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.addresses = addresses;
    }

    show(){
        console.log(this.name+" "+this.phone+" "+this.email);
        console.log("Addresses: ");
        for(let address of this.addresses){
            address.show();
        }
    }
}

class Address{
    constructor(adrsLine, city, state, zipCode, label){
        this.adrsLine = adrsLine;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.label = label;
    }

    show(){
        console.log(this.adrsLine+" "+this.city+" "+this.state+" "+this.zipCode+" "+this.label);
    }
}

const a1 = new Address(adrsLine="Redwood Shores", city="Ludhiana", state="Punjab", zipCode=141002, label="Work");
const a2 = new Address(adrsLine="Country Homes", city="Ludhiana", state="Punjab", zipCode=141004, label="Home");

const addressArray = [a1, a2];

addressArray[1].state="Himachal"

const u1 = new User(name="John", phone="+91 99999 11111", email="john@example.com", addresses=addressArray);
u1.show()

const addressArray1 = [a1];

const u2 = new User(name="Fionna", 
phone="+91 99999 22222", 
email="fionna@example.com", addresses=addressArray1);