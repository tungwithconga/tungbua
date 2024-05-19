"use strict";
// Abstract Method (Phương thức trừu tượng):
// Là một phương thức mà chỉ được khai báo trong một lớp trừu tượng (abstract class).
// Không có cài đặt (implementation) cụ thể trong lớp trừu tượng, chỉ định rõ hành động mà các lớp con phải triển khai.
// Các lớp con phải override (ghi đè) phương thức trừu tượng và cung cấp cài đặt cụ thể cho nó.
class Animal {
}
class Dog extends Animal {
    makeSound() {
        console.log("gau gau!");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("meo meo");
    }
}
let dog = new Dog();
let cat = new Cat();
dog.makeSound();
cat.makeSound();
// Method (Phương thức):
// Là một hành động được định nghĩa và cài đặt trong một lớp.
// Có thể được gọi trực tiếp từ một đối tượng của lớp đó hoặc thông qua một thể hiện của lớp.
class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
}
let calc = new Calculator();
console.log(calc.add(9, 3));
console.log(calc.subtract(9, 3));
