"use strict";
function parseInput(input) {
    if (!input) {
        return null;
    }
    if (typeof input === 'number') {
        return 'number';
    }
    if (typeof input === 'boolean') {
        return 'boolean';
    }
    if (typeof input === 'string') {
        return 'string';
    }
    if (input === null) {
        return 'null';
    }
    if (typeof input === 'undefined') {
        return 'undefined';
    }
}
console.log(parseInput(10)); // Trả về "number"
console.log(parseInput(true)); // Trả về "boolean"
console.log(parseInput("Hello")); // Trả về "string"
console.log(parseInput(null)); // Trả về "null"
console.log(parseInput(undefined)); // Trả về "undefined"
