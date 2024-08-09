// Tính tổng, tìm giá trị lớn nhất và nhỏ nhất trong một mảng. Ví dụ mảng [1, 2, 3] thì tổng sẽ là 6 (1+2+3) và giá trị lớn nhất là 3

const number = [1, 2, 3]

let max = number[0]
let min = number[0]
let sum = 0
number.forEach(num => {
    sum += num;
    if (num > max) {
        max = num;
    }
    if (num < min) {
        min = num;
    }
});
console.log("Tổng:", sum);
console.log("Max:", max);
console.log("Min:", min);