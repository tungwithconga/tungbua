"use strict";
class Employee {
    constructor(name) {
        this.name = name;
    }
}
// Cách khởi tạo đối tượng abstraction
//thêm từ khóa abstract vào đầu class
//intance:
// let emp1 = new Employee("kkaka");
//emp1 được gọi là 1 intance của 1 class Employee
//Đối với abstract thì khong cho phép tạo đối tượng được
/*
Tạo 1 class con kế thừa class Employee
implement : triển khai
bắt buộc phải triển khai tất cả các phương thức của class cha (Abstract)
*/
class Employee1 extends Employee {
    constructor(address, name) {
        super(name);
        this.address = address;
        this.name = name;
    }
}
class Student extends Employee {
    constructor(age, name) {
        super(name);
        this.name = name;
        this.age = age;
    }
    getFullName(a) {
    }
}
