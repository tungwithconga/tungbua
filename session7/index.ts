/*
 1,Array
 */
let numbers:number[] = [1,2,3,4];
//Khai bao mang numbers cac phan tu trong mang numbers phai la numbers
/*
 2,object
*/
let obj={
    name: "minhthu",
    id: 20,
    address: "Ha Noi"
}
let obj1:{
    name: string;
    id: number;
    address: string;
}={
    name: "minhthu",
    id: 20,
    address: "Ha Noi"
}
/*
3,enum
*/
enum Role {
    ADMIN,USER
}
let person:{
    name:string;
    address:string;
    role:Role.ADMIN;
}={
    name: "minhthu",
    address: "Ha Noi",
    role: Role.ADMIN
}
/*
4,void áp dụng với function
Khi ham khong tra ve ket qua gi
Khi ham tra ve ket qua thi phai khai bao kieu du liệu trả về của hàm
*/
function sayHello ():void{
    console.log("Hello");
}
sayHello();
function sum(a:number,b:number):string{
    return a+b;
}
console.log(sum);
/*
 5,unknown
 Tuơng tự kiểu dữ liệu any nhưng chặt hơn khi dùng
 any thì kiểu dữ liệu truyền vào là gì cũng được 
 */
function test(a:any){
    console.log(a.toUpperCase());
}
test("text");
function test1(a:unknown){
    //Bắt buộc phải kiểm tra dữ liệu trước khi thực hiện các phép tính
    if(typeof a === "string"){
        console.log(a.toUpperCase());
    }
}
test1("text");

/*
6,type never
Thương dùng trong các vòng lặp vô tận
tức là các vòng lặp chạy trong 
*/


