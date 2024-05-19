"use strict";
function thongTin(obj) {
    if (typeof obj === "object" &&
        obj !== null &&
        "name" in obj &&
        "age" in obj &&
        "address" in obj &&
        typeof obj.name === "string" &&
        typeof obj.age === "number" &&
        typeof obj.address === "object" &&
        "street" in obj.address &&
        "city" in obj.address &&
        typeof obj.address.street === "string" &&
        typeof obj.address.city === "string") {
        return true;
    }
    return false;
}
const person1 = {
    name: "Tung",
    age: 19,
    address: {
        street: "Dong Da",
        city: "Ha Noi"
    }
};
const person2 = {
    name: "Truong",
    age: "19",
    address: {
        street: "Ha Dong",
        city: "Ha Noi"
    }
};
console.log(thongTin(person1)); // true
console.log(thongTin(person2)); // false
