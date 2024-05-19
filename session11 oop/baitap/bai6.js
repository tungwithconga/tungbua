"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        console.log("Name:", this.name);
        console.log("Price:", this.price);
    }
}
class Electronics extends Product {
    constructor(name, price, brand) {
        super(name, price);
        this.brand = brand;
    }
    getDescription() {
        super.getDescription();
        console.log("thuong hieu:", this.brand);
    }
}
const laptop = new Electronics("victud", 21000, "strong");
laptop.getDescription();
