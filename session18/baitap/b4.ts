interface Geometry {
    calculateArea(): number;
    calculatePerimeter(): number;
}
class Circle implements Geometry {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle implements Geometry {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const circle = new Circle(7);
console.log(, circle.calculateArea());
console.log(, circle.calculatePerimeter());

const rectangle = new Rectangle(5, 4);
console.log(rectangle.calculateArea());
console.log(rectangle.calculatePerimeter());
