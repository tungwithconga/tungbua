class Product {
    protected name: string;
    protected id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
    printInfo(): void {
        console.log(`ID ${this.id},sản phẩm: ${this.name}`);
    }
}
class Electronic extends Product {
    private brand: string;

    constructor(name: string, id: number, brand: string) {
        super(name, id);
        this.brand = brand;
    }
    printInfo(): void {
        super.printInfo();
        console.log(`Thương hiệu: ${this.brand}`);
    }
}
class Book extends Product {
    private author: string;

    constructor(name: string, id: number, author: string) {
        super(name, id);
        this.author = author;
    }

    printInfo(): void {
        super.printInfo();
        console.log(`Tác giả: ${this.author}`);
    }
}
    
const electronic = new Electronic("Điện thoại", 123, "Ip");
electronic.printInfo(); q

const book = new Book("Mot bua no", 156, "Nam Cao");
book.printInfo();
