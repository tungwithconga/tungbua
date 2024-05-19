abstract class Person {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract kiki(): void;
}
class Student extends Person {
    private id: number;

    constructor(name: string, id: number) {
        super(name);
        this.id = id;
    }
    kiki(): void {
        console.log(`ID: ${this.id}, Tên sinh viên: ${this.name}`);
    }
}
class Teacher extends Person {
    private subject: string;

    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }
    kiki(): void {
        console.log(`Tên giáo viên: ${this.name}, Môn học: ${this.subject}`);
    }
}

const student = new Student("Nguyen Thanh Tung", 12345);
student.kiki();

const teacher = new Teacher("VU Hai San", "Sea");
teacher.kiki();
