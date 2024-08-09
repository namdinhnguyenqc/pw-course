// Viết một hàm để chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại. Hàm sẽ nhận vào giá trị nhiệt độ và loại nhiệt độ ('C' hoặc 'F') và trả về nhiệt độ đã chuyển đổi.
// Biết công thức chuyển đổi:
// Từ độ C sang độ F: độ F = (độ C) * 9/5 + 32;
// Từ độ F sang độ C: (độ F - 32) * 5 / 9;

function chuyenDoiNhietDo(nhietDo, donVi) {
    let donViCanChuyenDoi = "";
    if (donVi === "C") {
        nhietDo = (nhietDo) * 9 / 5 + 32;
        donViCanChuyenDoi = "F"
    }
    else {
        nhietDo = (nhietDo - 32) * 5 / 9
        donViCanChuyenDoi = "C"
    }
    return nhietDo, "", donViCanChuyenDoi;

}
let ketQua = chuyenDoiNhietDo(50, "C")
console.log(ketQua)