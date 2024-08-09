// Khai báo một hằng số với giá trị kiểu Number bất kỳ.
const num = 29;

// In ra dòng sau ở console:
// Nếu hằng số lớn hơn 0: “Giá trị bạn nhập là số dương”
// Nếu hằng số nhỏ hơn 0: “Giá trị bạn nhập là số âm”
// Nếu hằng số = 0: “Giá trị bạn nhập là số 0”

if (num > 0) {
    console.log("Giá trị dương");
}
else if (num < 0) {
    console.log("Giá trị âm");
}
else if (num === 0) {
    console.log("Giá trị bằng 0");
}
