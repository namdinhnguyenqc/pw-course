// Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông. 
// Biết object student bao gồm 2 thuộc tính: name và grades. Trong đó grades là một object với 2 thuộc tính kiểu number: math và english


let student = {
    "name": "hoc sinh",
    "grades": {
        "math": 9,
        "english": 10
    }
}
console.log(student["grades"]["math"]);
