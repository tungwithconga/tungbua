interface ChangeSpeed {
    speedUp(): void;
    slowDown(): void;
    stop(): void;
}
class Vehicle implements ChangeSpeed {
    private speed: number;
    constructor(speed: number) {
        this.speed = speed;
    }
    speedUp(): void {
        this.speed += 10;
        console.log("Speeding up.", this.speed);
    }

    slowDown(): void {
        this.speed -= 30;
        console.log("Slowing down.", this.speed);
    }

    stop(): void {
        this.speed = 0;
        console.log("Stopping the vehicle.", this.speed);
    }
}
const myVehicle = new Vehicle(87);
myVehicle.speedUp();
myVehicle.slowDown();
myVehicle.stop();
