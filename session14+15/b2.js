"use strict";
class Product {
    constructor(productId, productName, productPrice) {
        this.id = productId;
        this.name = productName;
        this.price = productPrice;
    }
}
class CartProduct extends Product {
    constructor(productId, productName, productPrice, productQuantity) {
        super(productId, productName, productPrice);
        this.quantity = productQuantity;
    }
    caculatePrice() {
        return this.price * this.quantity;
    }
    increaseQuantity() {
        this.quantity++;
    }
    decreaseQuantity() {
        this.quantity--;
    }
}
class ShopProduct extends Product {
    constructor(productId, productName, productPrice, productStock) {
        super(productId, productName, productPrice);
        this.stock = productStock;
    }
}
class Cart {
}
[
    id, number
];
