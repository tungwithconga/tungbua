/*
    interface : giao diện
    dùng để định nghĩa các thuộc tính và phương thức các lớp con
    kế thừa bắt buộc phải triển khai
    ==> cũng giống như abstract
    -có những điều gì khác nhau so với abstract
    -để tạo abstract thì dùng từ khóa abstract 
    -để tạo interface thì dùng interface
    -trong interface sẽ gồm có thuộc tính và phương thức
    -đối với phương thức thì không có phần thân tức là nó chỉ định nghĩa thôi
    -đối với interface thì không thể dùng kiểu kết hợp(union và intersection) được như đối với type
    ==> Khổng thể khởi tạo đối tượng từ interface được
    -interface sinh ra nhằm mục đích gì?
    -interface là 1 cái khuân mẫu cho các class khác kế thừa phảii tuân theo
    -các class con khi kế thừa interface bắt buộc phải triển khai tất cả các thuộc tính và phương thức của interface(implement)
    -1 class có thể triển khai nhiều interface được
    -1 interface có thể kế thừa nhiều interface được
    trong interface thì không thể đặt access mudifier đươc
*/ 
interface Sales{
    name: string;
    sale():string;
    sale():void;
}
interface Sales1{
    name: string;
    address : string;
}
class Person implements Sales1{
    name: string;
    constructor
};
type A={
    name: string;
}
type B={
    name: string;
    age:number;
}
type C=A|B;//union & kiểu intersection
//Khi dùng 
let name1:A;