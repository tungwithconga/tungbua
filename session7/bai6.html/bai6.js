"use strict";
function tinNhan(message) {
    console.log(message);
}
let result = tinNhan("Hello"); // Hàm không trả về giá trị, chỉ in ra thông điệp
console.log(result); // Kết quả: undefined vì không có giá trị được trả về
function loiError(message) {
    throw new Error(message);
}
function vongLapVoTan() {
    while (true) {
        console.log("Looping...");
    }
}
let error = loiError("Error occurred"); // Hàm này không bao giờ trả về giá trị, chỉ ném ra một ngoại lệ
console.log(error); // Không thể đạt được vì hàm loiError không bao giờ hoàn thành
let loop = vongLapVoTan(); // Hàm này không bao giờ trả về giá trị, vì vòng lặp vô hạn không bao giờ kết thúc
console.log(loop); // Không thể đạt được vì hàm vongLapVoTan không bao giờ hoàn thành
