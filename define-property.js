const product = {
    title: "iPhone 13"
}

// defineProperty in Javascript
// When we need to add Proerties later in our project
Object.defineProperty(product, "getTitle", {
        get: function(){
            return "Apple "+this.title;
        }
    }
)

Object.defineProperty(product, "setTitle", {
    set: function(title){
        // perform any logical check before if you want
        this.title = title;
    }
}
)

product.setTitle = "Apple iPhone 13 Pro :)"
console.log(product.getTitle);