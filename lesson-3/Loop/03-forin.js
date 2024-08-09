// Tạo một mảng chứa tất cả các tên thuộc tính của một đối tượng. Ví dụ object student={“name”: “Alex”, “age”: 10} thì sẽ tạo ra một mảng
// [“name”, “age”]

let student = {
    "name": "Alex",
    "age": 10
};

let chuoi = [];

for (let x in student) {
    chuoi.push(x);
}

console.log(chuoi);