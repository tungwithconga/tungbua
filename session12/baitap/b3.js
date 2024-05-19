"use strict";
// Class (Lớp):
// Lớp (class) là một bản thiết kế cho các đối tượng, định nghĩa các thuộc tính và phương thức của đối tượng.
// Bạn có thể tạo ra các đối tượng cụ thể từ lớp và sử dụng chúng.
// Lớp có thể được sử dụng để tạo ra nhiều đối tượng với cấu trúc và hành vi giống nhau.
class Bia {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    drive() {
        console.log(` ${this.color} ${this.brand} Co.`);
    }
}
const myCo = new Co("Rhino", "blue");
myCo.drive();
// Abstract class (Lớp trừu tượng):
// Lớp trừu tượng (abstract class) là một lớp mà không thể tạo ra đối tượng cụ thể từ nó. Thay vào đó, nó được sử dụng như một mẫu cho các lớp con kế thừa từ nó.
// Lớp trừu tượng có thể chứa các phương thức trừu tượng (abstract methods), các phương thức này chỉ được định nghĩa mà không có thân hàm, và các lớp con phải triển khai chúng.
// Lớp trừu tượng có thể chứa cả các phương thức cụ thể, giống như một lớp thông thường.
class Shape {
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
const circle = new Circle(8);
console.log(":", circle.calculateArea());
