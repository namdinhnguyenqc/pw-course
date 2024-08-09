// Tạo một mảng mới từ một mảng đã cho, trong đó mỗi phần tử được nhân đôi. Ví dụ mảng [1, 2, 3] thì mảng mới sẽ là [2, 4, 6]

const number = [1, 2, 3]
let sum = []

number.forEach(num => {
    sum.push(num * 2);
});

console.log(sum)