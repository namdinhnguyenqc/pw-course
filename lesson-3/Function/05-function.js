// Tạo một function để cập nhật email cho người dùng trong một danh sách, dựa trên tên người dùng.
// Đoạn code giả mã(pseudo code) như sau:
//  Khai báo mảng global các object có 2 thuộc tính: name, email
//  Khai báo hàm có 2 tham số: name, newEmail
//  Sử dụng vòng for, duyệt trong mảng, nếu gặp phần tử nào có tên trùng với tham số name, cập nhật giá trị email về newEmail


// let users = [
//     { name: "Na", email: "john.doe@example.com" },
//     { name: "Jane Smith", email: "jane.smith@example.com" },
//     { name: "Bob Johnson", email: "bob.johnson@example.com" }
// ];

// // Hàm cập nhật email cho người dùng
// function updateUserEmail(name, newEmail) {
//     // Duyệt qua mảng users
//     for (let i = 0; i < users.length; i++) {
//         // Nếu tìm thấy người dùng có tên trùng với tham số name
//         if (users[i].name === name) {
//             // Cập nhật email của người dùng
//             users[i].email = newEmail;
//             // Kết thúc hàm
//             return;
//         }
//     }
//     // Nếu không tìm thấy người dùng với tên này, in ra thông báo
//     console.log(`Không tìm thấy người dùng với tên "${name}".`);
// }

// // Sử dụng hàm updateUserEmail
// updateUserEmail("Jane Smith", "jane.doe@example.com");
// console.log(users);

let user = [
    { name: "Nam", email: "namdinhnguyen@gmail.com" }
]
function updateMail(name, newEmail) {
    for (let i = 0; i < user.length; i++) {
        if (user[i].name === name) {
            user[i].email = newEmail;
            return;
        }
    }
    console.log(`Không tìm thấy người dùng với tên "${name}".`);
}
updateMail("Nam1", "namdinhnguyen2611@gmail.com")
console.log(user)