// Viết một hàm tính điểm trung bình của các sinh viên dựa trên điểm số lưu trong một mảng các object.
// Biết object có cấu trúc như sau: {“name”: “Alex”, score: 85}
let ThongTin = [
    { "name": "Nam", "diem": 85 },
    { "name": "Lan", "diem": 80 },
    { "name": "Lan", "diem": 80 },
    { "name": "Truc", "diem": 80 },
    { "name": "Vu", "diem": 80 }
];
function diemTrungBinh(sinhVien) {
    tongDiem = 0
    tongSV = sinhVien.length

    for (let i = 0; i < tongSV; i++) {
        tongDiem += sinhVien[i].diem
    }
    return tongDiem / tongSV
}
console.log("Tổng điểm", diemTrungBinh(ThongTin))  //Điểm đúng là 81 điểm

