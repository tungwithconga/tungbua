
abstract class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
    abstract makeNoise(): void;
    printName(): void {
        console.log(`Tên của đối tượng là: ${this.name}`);
    }
}
class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }


    makeNoise(): void {
        console.log("meo meo");
    }
}
class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    makeNoise(): void {
        console.log("gâu gâu");
    }
}
const cat = new Cat("Mèo");
cat.printName();
cat.makeNoise();

const dog = new Dog("Chó");
dog.printName();
dog.makeNoise();
