abstract class Shape{
    name: string;
    constructor(name: string){
        this.name = name;
    }
    // Viet theo phuong thuc normal
    getName(){
    
    }
    //viet theo kieu abstract 
    abstract getSize(): void;
}
class Rectangle extends Shape{
    width: number;
    height: number;
    constructor(name: string, width: number, height: number){
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize(): void{
        console.log("chieu dai",this.width);
        console.log("chieu rong",this.height);
    }
}
let retangle1 = new Rectangle("Hinh tron",5,6);
console.log("retangle1",retangle1.getName());
rectangle1.getSize();

