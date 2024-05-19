"use strict";
class honey {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log(this.name + " yeah");
    }
}
const myhoney = new honey("Buddy");
myhoney.sound();
// Abstract class:
// Abstract class là một lớp mà không thể tạo ra các thực thể (instances) trực tiếp từ nó. Thay vào đó, nó được dùng như một bản thiết kế cho các lớp con.
// Abstract class có thể chứa các phương thức đã triển khai hoặc chưa triển khai (abstract methods).
// Một lớp con phải triển khai tất cả các phương thức abstract của lớp cha hoặc nó cũng phải là một abstract class.
class Shape {
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}
const myCircle = new Circle(7);
console.log(myCircle.calculateArea());
