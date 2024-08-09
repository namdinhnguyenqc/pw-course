// Viết hàm nhập vào điểm số. In ra phân loại điểm số của học sinh: giỏi (>= 8), khá (>= 6.5 và < 8), trung bình (>= 5 và < 6.5), yếu (< 5).


function phanLoai(diem) {
    if (diem >= 8) {
        console.log("Học sinh giỏi");
    }
    else if (diem >= 6.5 && diem < 8) {
        console.log("Học sinh khá")
    }
    else if (diem >= 5 && diem < 6.5) {
        console.log("Học sinh trung bình");
    }
    else {
        console.log("Học sinh yếu")
    }
}

phanLoai(9) //Check học sinh giỏi
phanLoai(6.5) //Check học sinh khá
phanLoai(6) //Check hoc sinh trung bình
phanLoai(0) //Check học sinh yếu