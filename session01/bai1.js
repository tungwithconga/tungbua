class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

function printStudentNames(students) {
    students.forEach(student => {
        console.log(student.name);
    });
}

let students = [
    new Student(1, "Tung"),
    new Student(2, "Tuan"),
    new Student(3, "Truong")
];

printStudentNames(students);
