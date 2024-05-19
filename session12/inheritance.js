"use strict";
/*
  Tinh kế thừa
  Là tính chất thể hiện bởi class con kế thừa class cha thì sẽ có các thuộc tính và phương thức của lớp cha
  Giúp tái cấu trúc,sử dụng lại đoạn code
  1 class con có thể kế thừa 1 class cha
  1 class cha có thể có nhiều class con
 */
//Khai báo class cha 
class Parent {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    //Khai bao cho class parent có phưng thức showInfo
    showInfo() {
        console.log(`xin chao ${this.name}`);
    }
    setName(newName) {
        this.id = newName;
    }
}
//Khoi tạo class con kế thừa class cha
//Để kế thừa dùng từ khóa extend
class Child extends Parent {
    constructor(name, id) {
        super(name, id);
        this.name = name;
        this.id = id;
    }
}
// Khởi tạo đối tượng con
let child1 = new Child("Minh thu", 2);
//Khi class child 
console.log(child1.showInfo());
