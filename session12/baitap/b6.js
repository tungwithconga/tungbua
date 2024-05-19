"use strict";
class Employee {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
    calculateSalary() {
        throw new Error("Phương thức calculateSalary chưa được triển khai.");
    }
}
class InternEmployee extends Employee {
    constructor(name, role, workHour) {
        super(name, role);
        this.workHour = workHour;
    }
    calculateSalary() {
        return 30000 * this.workHour;
    }
}
class OfficialEmployee extends Employee {
    constructor(name, role, overtimeWage) {
        super(name, role);
        this.overtimeWage = overtimeWage;
    }
    calculateSalary() {
        return 20000000 + this.overtimeWage;
    }
}
const intern = new InternEmployee("Tung", "xxx", 78);
console.log(`Lương ${intern.name} là: ${intern.calculateSalary()} VND`);
const official = new OfficialEmployee("Truong", "xxl", 5800000);
console.log(`Lương ${official.name} là: ${official.calculateSalary()} VND`);
