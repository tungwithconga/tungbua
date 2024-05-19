abstract class Employee {
    name:string;
    constructor(name:string){
        this.name = name;
    }
    //Khai bao phuong thuc voi abstract
    // getFullName(){
    //     return this.name;
    // }
    abstract getFullName():string;
    //Đối với phương thức tròn abstract thì chỉ tên phương thức,kiểu dữ liệu
    //Trả về và không có phần body 
}
// Cách khởi tạo đối tượng abstraction
//thêm từ khóa abstract vào đầu class
//intance:
// let emp1 = new Employee("kkaka");
//emp1 được gọi là 1 intance của 1 class Employee
//Đối với abstract thì khong cho phép tạo đối tượng được
/*
Tạo 1 class con kế thừa class Employee
implement : triển khai
bắt buộc phải triển khai tất cả các phương thức của class cha (Abstract)
*/
abstract class Employee1 extends Employee{
    address:string;
    constructor(address:string,name:string){
        super(name);
        this.address = address;
        this.name = name;
    }
}



class Student extends Employee{
    private age: number;
    constructor(age:number,name:string){
        super(name);
        this.name = name;
        this.age = age;
    }
    getFullName(a:number):string{
     
    }
}
