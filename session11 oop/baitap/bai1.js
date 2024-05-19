"use strict";
// Lớp Employee có các thuộc tính name, _company, và __phone. _company được đặt tên một cách thông thường
// cho phạm vi truy cập protected. __phone được đặt tên với dấu gạch dưới hai lần
// (__) trước tên để làm cho nó "private". Tuy nhiên, Python thực sự không có thuộc
// tính riêng tư mà chỉ có thuộc tính được "đặt tên lại" để tránh việc ghi đè không cần thiết từ bên ngoài.
// Lớp Manager kế thừa từ Employee và có thêm thuộc tính teamSize
// Phương thức printInfo() được ghi đè để in ra tất cả các thuộc tính, bao gồm teamSize.
