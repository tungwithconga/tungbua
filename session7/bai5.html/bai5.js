"use strict";
// Khai báo biến với kiểu dữ liệu any
let bienAny;
bienAny = 7; // Có thể gán bất kỳ giá trị nào cho biến này
console.log(bienAny); // In ra: 7
bienAny = "Hello";
console.log(bienAny); // In ra: Hello
// Khai báo biến với kiểu dữ liệu unknown
let bienUnknown;
bienUnknown = 13; // Có thể gán bất kỳ giá trị nào cho biến này
console.log(bienUnknown); // In ra: 13
bienUnknown = "Hello";
console.log(bienUnknown); // In ra: Hello
// Sử dụng biến unknown với kiểu dữ liệu an toàn hơn
// Cần thực hiện kiểm tra kiểu dữ liệu trước khi sử dụng
if (typeof bienUnknown === "string") {
    console.log(bienUnknown.toUpperCase()); // Sẽ không có lỗi vì biến có thể là string
}
// Cố gắng sử dụng biến any với kiểu dữ liệu an toàn
// TypeScript không cảnh báo hoặc phát hiện lỗi trong quá trình biên dịch
let lengthOfString = bienAny.length; // Có thể gây lỗi khi chạy vì không phải tất cả các kiểu dữ liệu đều có thuộc tính length
console.log(lengthOfString); // Kết quả có thể là undefined hoặc gây lỗi khi chạy
