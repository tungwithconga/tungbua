"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Tên của đối tượng là: ${this.name}`);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log("meo meo");
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log("gâu gâu");
    }
}
const cat = new Cat("Mèo");
cat.printName();
cat.makeNoise();
const dog = new Dog("Chó");
dog.printName();
dog.makeNoise();
