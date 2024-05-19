"use strict";
// Protected:
// Các thành viên được đánh dấu là protected có thể truy cập được từ các lớp con (lớp kế thừa).
// Trong lớp cha, các thành viên protected có thể truy cập bởi lớp con thông qua kế thừa.
// Trong các phần mở rộng của lớp (lớp con), các thành viên protected có thể truy cập được như là các thành viên của lớp đó.
class Parent {
    constructor(x) {
        this.x = x;
    }
}
class Child extends Parent {
    constructor(x) {
        super(x);
    }
    displayX() {
        console.log(" x:", this.x);
    }
}
const child = new Child(13);
child.displayX();
// Các thành viên được đánh dấu là private chỉ có thể truy cập được từ bên trong lớp chứa chúng.
// Thành viên private không thể truy cập từ các lớp con.
class Example {
    constructor(y) {
        this.y = y;
    }
    displayY() {
        console.log(" y:", this.y);
    }
}
const example = new Example(23);
example.displayY();
