"use strict";
function typeArg(arg) {
    console.log(typeof arg);
}
typeArg(5); // In ra "number"
typeArg("Hello"); // In ra "string"
typeArg(true); // In ra "boolean"
typeArg({ name: "Tung", age: 19 }); // In ra "object"
typeArg([2, 4, 6]); // In ra "object"
