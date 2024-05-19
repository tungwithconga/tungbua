/*
1.union : kiểu kết hơp |
2.intersection : 
 */
let a:number | string | undefined = 5;
a="hoong";
// tham chiếu (array);
let numbers11 : (number | string)[] = [1,2,3,4,5];
type A={
    name: string;
    address:string;
    phone:string
}
type B={
     email:string
}
type C=A&B;
let obj11={
    name: "minhthu",
    phone:"093423425",
    address: "Ha Noi"
}
let obj13:C={
    name: "minhthu",
    phone:"093423425",
    address: "Ha Noi",
    email:"<EMAIL>"
}