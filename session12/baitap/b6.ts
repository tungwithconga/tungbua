class Employee {
    protected name: string;
    protected role: string;

    constructor(name: string, role: string) {
        this.name = name;
        this.role = role;
    }

    calculateSalary(): number {
        throw new Error("Phương thức calculateSalary chưa được triển khai.");
    }
}

class InternEmployee extends Employee {
    private workHour: number;

    constructor(name: string, role: string, workHour: number) {
        super(name, role);
        this.workHour = workHour;
    }

    calculateSalary(): number {
        return 30000 * this.workHour;
    }
}

class OfficialEmployee extends Employee {
    private overtimeWage: number;

    constructor(name: string, role: string, overtimeWage: number) {
        super(name, role);
        this.overtimeWage = overtimeWage;
    }

    calculateSalary(): number {
        return 20000000 + this.overtimeWage;
    }
}

const intern = new InternEmployee("Tung", "xxx", 78);
console.log(`Lương ${intern.name} là: ${intern.calculateSalary()} VND`);

const official = new OfficialEmployee("Truong", "xxl", 5800000);
console.log(`Lương ${official.name} là: ${official.calculateSalary()} VND`);
