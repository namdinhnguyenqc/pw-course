// Tạo file ex5.js, thêm vào code đáp án cho đề bài sau:
// Lặp từ 1 tới 100
let i = 0
for (i; i <= 100; i++)
    // Trong mỗi vòng lặp, in ra:
    // Nếu giá trị của vòng lặp chia hết cho 2, in “Số <i> là số chẵn”
    // Nếu giá trị của vòng lặp không chia hết cho 2, in “Số <i> là số lẻ”

    if (i % 2 === 0) {
        console.log("Số ", i, "là số chẵn");
    }
    else {
        console.log("Số lẻ", i, "là số lẻ");
    }
s