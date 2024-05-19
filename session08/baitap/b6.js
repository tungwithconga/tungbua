"use strict";
function inRaMang(input) {
    if (typeof input === 'string') {
        console.log(input);
    }
    else if (Array.isArray(input)) {
        input.forEach(item => console.log(item));
    }
    else {
        throw new Error('wrong.');
    }
}
// Sử dụng
const stringInput = "Hello";
const arrayInput = ["Dua", "Dau tay", "Cam"];
inRaMang(stringInput);
inRaMang(arrayInput);
