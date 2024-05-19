class Employee {
    public ten: string;
    protected congTy: string;
    private sdt: string;

    constructor(ten: string, congTy: string, sdt: string) {
        this.ten = ten;
        this.congTy = congTy;
        this.sdt = sdt;
    }
    printInfo(): void {
        console.log("ten", this.ten);
        console.log("cong ty:", this.congTy);
        console.log("sdt:", this.sdt);
    }
}
class Manager extends Employee {
    public teamSize: number;
    constructor(ten: string, congTy: string, sdt: string, teamSize: number) {
        super(ten, congTy, sdt);
        this.teamSize = teamSize;
    }

    printInfo(): void {
        super.printInfo();
        console.log("Team Size:", this.teamSize);
    }
}
const inFo = new Manager("Tung", "rekkei", "2314512", 21);
inFo.printInfo();





