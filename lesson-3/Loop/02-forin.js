// Tính tổng các giá trị số của các thuộc tính trong một đối tượng. Ví dụ: object student={“name”: “Alex”, “age”: 10, “salary”: 20} thì in ra tổng
// 30 (=10+20).


let student = { "name": "Alex", "age": 10, "salary": 20 };
let sum = 0;

for (let prop in student) {
    if (typeof student[prop] === 'number') {
        sum += student[prop];
    }
}

console.log(sum); // Output: 30