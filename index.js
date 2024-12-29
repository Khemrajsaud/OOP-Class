// class :

class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`product: ${this.name}`);
        console.log(`price: $${this.price.toFixed(2)}`);
        
        
    }
    calculateTotal(saleTaxt){
        return this.price + (this.price * saleTaxt);
    }
}
const saleTaxt = 0.5;
const Product1 = new Product("shirt", 19.99);
const Product2 = new Product("pants", 200);
const Product3 = new Product("underwear", 100)
Product1.displayProduct();

const total =  Product1.calculateTotal(saleTaxt);
console.log(`total price (with tax): $${total}`);
