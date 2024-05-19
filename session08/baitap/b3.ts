interface Square {
    shape: 'square';
    sideLength: number;
}
interface Circle {
    shape: 'circle';
    radius: number;
}
type Shape = Square | Circle;

function calculateArea(shape: Shape): number {
    switch (shape.shape) {
        case 'square':
            return shape.sideLength ** 2;
        case 'circle':
            return Math.PI * shape.radius ** 2;
        default:
            throw new Error('Invalid shape');
    }
}
const square: Square = {
    shape: 'square',
    sideLength: 10
};

const circle: Circle = {
    shape: 'circle',
    radius: 7
};

console.log(calculateArea(square)); 
console.log(calculateArea(circle)); 
