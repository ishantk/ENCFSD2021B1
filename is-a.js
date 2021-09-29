// IS-A : Inheritance

class User{
    constructor(name, phone, email){
        this.name = name;
        this.phone = phone;
        this.email = email;
        console.log("User Object Constructed");
    }

    show(){
        console.log("User Details: ");
        console.log(this.name+" "+this.phone+" "+this.email);
    }

    askForUpgrade(user){
    }

    upgradeUserToPrime(){
       //return new PrimeUser(this.name, this.phone, this.email);
       // Add some more attributes in the same object :)
       this.isVideo = true
       this.isMusic = true
       this.freeDeliveries = 10
    }
}

// Liskov Principle| open close
class PrimeUser extends User{
    constructor(name, phone, email){
        super(name, phone, email) // Parent
        console.log("Prime User Object Constructed");
        this.isVideo = true
        this.isMusic = true
        this.freeDeliveries = 10
    }

    // Redefine -> Overriding
    show(){
        console.log("Prime User Details: ");
        super.show();
        console.log("Video Access: "+this.isVideo);
        console.log("Music Access: "+this.isMusic);
        console.log("Free Deliveries: "+this.freeDeliveries);
    }
}

// Principle of OOPS:
// Child can access any property of Parent, if Child does not have it

let u1 = new User(name="John", phone="+91 99999 11111", email="john@example.com");
u1.show()

let u2 = new PrimeUser(name="Fionna", phone="+91 98765 12345", email="fionna@example.com");
u2.show()

console.log("Upgraded User: ");
let upgradedUser = u1.upgradeUserToPrime()
upgradedUser.show()

// Assignment: Upgrade Regular User to a Prime User :)