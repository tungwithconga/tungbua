//  Định nghĩa lớp abstract Job có thuộc tính type, phương thức printType để in ra
//  loại công việc và phương thức abstract calculateSalary để tính lương khi làm công việc đó.
//  Định nghĩa lớp PartimeJob và lớp FulltimeJob
//  kế thừa lớp Job. Lớp PartimeJob có thêm thuộc tính workingHour.
//  Xây dựng phương thức printType để in ra loại công việc trong lớp cha,
//  phương thức calculateSalary để tính lương công việc. Lương fulltime sẽ mặc định là 10.000.000,
//  lương partime sẽ được tính theo công thức 30.000 * workingHour.
abstract class Job {
    protected type: string;

    constructor(type: string) {
        this.type = type;
    }

    printType(): void {
        console.log(`Loại công việc: ${this.type}`);
    }

    abstract calculateSalary(): number;
}

class PartimeJob extends Job {
    private workingHour: number;

    constructor(type: string, workingHour: number) {
        super(type);
        this.workingHour = workingHour;
    }

    calculateSalary(): number {
        return 30000 * this.workingHour;
    }
}

class FulltimeJob extends Job {
    constructor(type: string) {
        super(type);
    }

    calculateSalary(): number {
        return 10000000;
    }
}
const partTime = new PartimeJob("Part-time", 32);
partTime.printType();
console.log(`Lương: ${partTime.calculateSalary()}`);

const fullTime = new FulltimeJob("Full-time");
fullTime.printType();
console.log(`Lương: ${fullTime.calculateSalary()}`);
