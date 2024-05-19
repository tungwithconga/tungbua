"use strict";
function resultArray(input) {
    if (typeof input === 'number') {
        return input ** 2;
    }
    else if (Array.isArray(input)) {
        return input.map(num => num ** 2);
    }
    else {
        throw new Error('wrong.');
    }
}
const numberInput = 10;
const arrayInput = [3, 6, 9];
console.log(resultArray(numberInput));
console.log(resultArray(arrayInput));
