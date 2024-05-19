"use strict";
class Person {
    constructor(ten) {
        this.ten = ten;
    }
    inFo1() {
        console.log("ten:", this.ten);
    }
}
class Students extends Person {
    constructor(ten, id) {
        super(ten);
        this.id = id;
    }
    inFo1() {
        super.inFo1();
        console.log("ID:", this.id);
    }
}
const student1 = new Student("Tung", 231412);
student1.inFo1();
