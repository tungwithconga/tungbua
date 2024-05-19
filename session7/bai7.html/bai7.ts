// Định nghĩa interface cho đối tượng sinh viên
interface Student {
    id: number;
    name: string;
    class: string;
}

// Khởi tạo mảng chứa các đối tượng sinh viên
let students: Student[] = [
    { id: 1, name: "Tung", class: "S" },
    { id: 2, name: "Truong Gay", class: "C" },
    { id: 3, name: "Toc man", class: "S" },
    { id: 4, name: "men men", class: "C" }
];

// Xây dựng hàm để lọc ra các sinh viên 
function filterStudentsByClass(studentArray: Student[], className: string): Student[] {
    return studentArray.filter(student => student.class === className);
}

// Sử dụng hàm để lấy danh sách sinh viên trong lớp S
let classAStudents: Student[] = filterStudentsByClass(students, "S");
console.log("sinh vien trong lop buoi S:", classAStudents);

// Sử dụng hàm để lấy danh sách sinh viên trong lớp C
let classBStudents: Student[] = filterStudentsByClass(students, "C");
console.log("sinh vien trong lop buoi C:", classBStudents);
