"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(amount) {
        this.speed -= amount;
    }
    speedUp(amount) {
        this.speed += amount;
    }
    showSpeed() {
        console.log("toc do:", this.speed);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    changeSpeed(amount) {
        if (amount >= 0) {
            this.speedUp(amount);
        }
        else {
            this.slowDown(Math.abs(amount));
        }
    }
    showSpeed() {
        super.showSpeed();
        console.log("dang:", this.gear);
    }
}
const myBicycle = new Bicycle("xe pkl", 200, 150, 53);
console.log("Initial state:");
myBicycle.showSpeed();
myBicycle.changeSpeed(10);
console.log("\nSau khi tang toc do len 10:");
myBicycle.showSpeed();
myBicycle.changeSpeed(-5);
console.log("\nsau khi giam toc do di 5:");
myBicycle.showSpeed();
