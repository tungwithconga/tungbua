"use strict";
class Product {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    printInfo() {
        console.log(`ID ${this.id},sản phẩm: ${this.name}`);
    }
}
class Electronic extends Product {
    constructor(name, id, brand) {
        super(name, id);
        this.brand = brand;
    }
    printInfo() {
        super.printInfo();
        console.log(`Thương hiệu: ${this.brand}`);
    }
}
class Book extends Product {
    constructor(name, id, author) {
        super(name, id);
        this.author = author;
    }
    printInfo() {
        super.printInfo();
        console.log(`Tác giả: ${this.author}`);
    }
}
const electronic = new Electronic("Điện thoại", 123, "Ip");
electronic.printInfo();
q;
const book = new Book("Mot bua no", 156, "Nam Cao");
book.printInfo();
