"use strict";
class Employee {
    constructor(ten, congTy, sdt) {
        this.ten = ten;
        this.congTy = congTy;
        this.sdt = sdt;
    }
    printInfo() {
        console.log("ten", this.ten);
        console.log("cong ty:", this.congTy);
        console.log("sdt:", this.sdt);
    }
}
class Manager extends Employee {
    constructor(ten, congTy, sdt, teamSize) {
        super(ten, congTy, sdt);
        this.teamSize = teamSize;
    }
    printInfo() {
        super.printInfo();
        console.log("Team Size:", this.teamSize);
    }
}
const inFo = new Manager("Tung", "rekkei", "2314512", 21);
inFo.printInfo();
