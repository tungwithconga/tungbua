"use strict";
class Quadrangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
class Rectangle extends Quadrangle {
    constructor(width, height) {
        super(width, height);
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
class Square extends Quadrangle {
    constructor(sideLength) {
        super(sideLength, sideLength);
    }
    calculatePerimeter() {
        return 4 * this.width;
    }
}
const rectangle = new Rectangle(6, 8);
console.log("Chu vi của hình chữ nhật:", rectangle.calculatePerimeter());
const square = new Square(7);
console.log("Chu vi của hình vuông:", square.calculatePerimeter());
