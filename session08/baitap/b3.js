"use strict";
function calculateArea(shape) {
    switch (shape.shape) {
        case 'square':
            return shape.sideLength ** 2;
        case 'circle':
            return Math.PI * shape.radius ** 2;
        default:
            throw new Error('Invalid shape');
    }
}
const square = {
    shape: 'square',
    sideLength: 10
};
const circle = {
    shape: 'circle',
    radius: 7
};
console.log(calculateArea(square));
console.log(calculateArea(circle));
