"use strict";
// Khởi tạo mảng chứa các đối tượng sinh viên
let students = [
    { id: 1, name: "Tung", class: "S" },
    { id: 2, name: "Truong Gay", class: "C" },
    { id: 3, name: "Toc man", class: "S" },
    { id: 4, name: "men men", class: "C" }
];
// Xây dựng hàm để lọc ra các sinh viên 
function filterStudentsByClass(studentArray, className) {
    return studentArray.filter(student => student.class === className);
}
// Sử dụng hàm để lấy danh sách sinh viên trong lớp S
let classAStudents = filterStudentsByClass(students, "S");
console.log("sinh vien trong lop buoi S:", classAStudents);
// Sử dụng hàm để lấy danh sách sinh viên trong lớp C
let classBStudents = filterStudentsByClass(students, "C");
console.log("sinh vien trong lop buoi C:", classBStudents);
