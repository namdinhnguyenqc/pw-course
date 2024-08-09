// In ra tên và giá trị của mỗi thuộc tính trong một đối tượng. Ví dụ: object student = {“name”: “Alex”, “age”: 10} thì in ra
// name=Alex
// age=10
const student = {
    name: "Alex",
    age: 10
};

for (let prop in student) {
    console.log(`${prop}=${student[prop]}`);
}