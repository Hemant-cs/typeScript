"use strict";
class Product {
    // Constructor to initialize the product properties
    constructor(productName, productPrice, productId) {
        this.isInCart = false;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productId = productId;
    }
    // Method to add the product to the cart
    addToCart() {
        this.isInCart = true;
        console.log(`${this.productName} has been added to the cart.`);
    }
    // Method to remove the product from the cart
    removeFromCart() {
        this.isInCart = false;
        console.log(`${this.productName} has been removed from the cart.`);
    }
    // method to buy the product
    buyProduct() {
        if (this.isInCart) {
            console.log(`Buying ${this.productName} for $${this.productPrice}.`);
            this.removeFromCart();
        }
        else {
            console.log(`${this.productName} is not in the cart.`);
        }
    }
}
//buying laptop 
const laptop = new Product("MacBook M4 pro", 12000, 1);
const addingLaptopToCart = laptop.addToCart();
// Output: Laptop has been added to the cart.
const buyingLaptop = laptop.buyProduct();
// Output: Buying Laptop for $1200. Laptop has been removed from the cart.
//buying smartphone
const mobile = new Product("iPhone 16 pro", 8000, 2);
const addingMobileToCart = mobile.addToCart();
// Output: Smartphone has been added to the cart.
const buyingMobile = mobile.buyProduct();
// Output: Buying Smartphone for $800. Smartphone has been removed from the cart. 
//buying tablet
const tablet = new Product("iPad XE", 400, 3);
const addingTabletToCart = tablet.addToCart();
// Output: Tablet has been added to the cart.
const buyingTablet = tablet.buyProduct();
// Output: Buying Tablet for $400. Tablet has been removed from the cart.
