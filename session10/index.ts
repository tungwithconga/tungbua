/*
OOP : Lập trình hướng đối tượng 
Object Oritence Program
là mô hình lập trình dựa vào các đối tương thực tế 
đối tượng con mèo,đối tượng cái xe ô tô,...
1 đối tượng sẽ gồm các thuộc tính và phương thức

Cách tạo đối tượng 
1,Dùng let,const,var
let student = {

}
2,Dùng new object()
3,Dùng hàm tạo constructor ==> dùng từ khóa new
4,Dùng class
 */
// Yêu cầu tạo ra đối tượng object
class Student{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    // Khai báo các phương thức 
    // ví dụ thầy có phươgn thức get name
    getName():Void{
        console.log(`Xin chao $(this.name)`);
    }
    getAge():void{
    }
}
let std1 = new Student("minh thu",5);
console.log("1111",std1);
//Lay thuoc tinh
//Doi tuong thuoc tinh