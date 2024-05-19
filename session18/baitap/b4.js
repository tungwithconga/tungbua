"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
const circle = new Circle(7);
console.log(circle.calculateArea());
console.log(circle.calculatePerimeter());
const rectangle = new Rectangle(5, 4);
console.log(rectangle.calculateArea());
console.log(rectangle.calculatePerimeter());
