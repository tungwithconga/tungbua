"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    kiki() {
        console.log(`ID: ${this.id}, Tên sinh viên: ${this.name}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    kiki() {
        console.log(`Tên giáo viên: ${this.name}, Môn học: ${this.subject}`);
    }
}
const student = new Student("Nguyen Thanh Tung", 12345);
student.kiki();
const teacher = new Teacher("VU Hai San", "Sea");
teacher.kiki();
