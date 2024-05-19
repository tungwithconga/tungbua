"use strict";
class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }
    speedUp() {
        this.speed += 10;
        console.log("Speeding up.", this.speed);
    }
    slowDown() {
        this.speed -= 30;
        console.log("Slowing down.", this.speed);
    }
    stop() {
        this.speed = 0;
        console.log("Stopping the vehicle.", this.speed);
    }
}
const myVehicle = new Vehicle(87);
myVehicle.speedUp();
myVehicle.slowDown();
myVehicle.stop();
