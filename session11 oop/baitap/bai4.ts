class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: number;

    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(amount: number): void {
        this.speed -= amount;
    }

    speedUp(amount: number): void {
        this.speed += amount;
    }

    showSpeed(): void {
        console.log("toc do:", this.speed);
    }
}
class Bicycle extends Vehicle {
    private gear: number;

    constructor(name: string, speed: number, id: number, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }
    changeSpeed(amount: number): void {
        if (amount >= 0) {
            this.speedUp(amount);
        } else {
            this.slowDown(Math.abs(amount));
        }
    }
    showSpeed(): void {
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
