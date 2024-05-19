"use strict";
class Shape {
    constructor(name) {
        this.name = name;
    }
    // Viet theo phuong thuc normal
    getName() {
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log("chieu dai", this.width);
        console.log("chieu rong", this.height);
    }
}
let retangle1 = new Rectangle("Hinh tron", 5, 6);
console.log("retangle1", retangle1.getName());
rectangle1.getSize();
