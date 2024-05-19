class Person {
    protected ten: string;

    constructor(ten: string) {
        this.ten = ten;
    }

    inFo1(): void {
        console.log("ten:", this.ten);
    }
}
class Students extends Person {
    private id: number;
    constructor(ten: string, id: number) {
        super(ten);
        this.id = id;
    }
    inFo1(): void {
        super.inFo1();
        console.log("ID:", this.id);
    }
}
const student1 = new Student("Tung", 231412);
student1.inFo1();
