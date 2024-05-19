// Protected:
// Các thành viên được đánh dấu là protected có thể truy cập được từ các lớp con (lớp kế thừa).
// Trong lớp cha, các thành viên protected có thể truy cập bởi lớp con thông qua kế thừa.
// Trong các phần mở rộng của lớp (lớp con), các thành viên protected có thể truy cập được như là các thành viên của lớp đó.
class Parent {
    protected x: number;

    constructor(x: number) {
        this.x = x;
    }
}
class Child extends Parent {
    constructor(x: number) {
        super(x);
    }
    displayX(): void {
        console.log(" x:", this.x);
    }
}
const child = new Child(13);
child.displayX();

// Các thành viên được đánh dấu là private chỉ có thể truy cập được từ bên trong lớp chứa chúng.
// Thành viên private không thể truy cập từ các lớp con.
class Example {
    private y: number;

    constructor(y: number) {
        this.y = y;
    }
    displayY(): void {
        console.log(" y:", this.y);
    }
}
const example = new Example(23);
example.displayY(); 

