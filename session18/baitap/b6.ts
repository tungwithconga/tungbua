// Interface:
// Interface là một tập hợp các phương thức và thuộc tính mà một lớp có thể triển khai.
// Các phương thức trong interface thường không có phần thân (implementation), chỉ định nghĩa các chữ ký phương thức.
// Một lớp có thể triển khai nhiều interface.
// Interface không thể chứa các thuộc tính hoặc phương thức đã được triển khai.
interface Animal {
    name: string;
    sound(): void;
}
class honey
 implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sound(): void {
        console.log(this.name + " yeah");
    }
}
const myhoney = new honey("Buddy");
myhoney.sound(); 


// Abstract class:
// Abstract class là một lớp mà không thể tạo ra các thực thể (instances) trực tiếp từ nó. Thay vào đó, nó được dùng như một bản thiết kế cho các lớp con.
// Abstract class có thể chứa các phương thức đã triển khai hoặc chưa triển khai (abstract methods).
// Một lớp con phải triển khai tất cả các phương thức abstract của lớp cha hoặc nó cũng phải là một abstract class.
abstract class Shape {
    abstract calculateArea(): number;
}
class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}
const myCircle = new Circle(7);
console.log(myCircle.calculateArea());
