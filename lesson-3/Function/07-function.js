// Viết một hàm để kiểm tra xem tất cả sản phẩm trong một mảng có giá lớn hơn 0 không.
// Biết giỏ hàng là một mảng chứa các object sản phẩm. Sản phẩm có cấu trúc: {“name”: “product 1”, price: 100 }


let gioHang = [
    { "name": "product 1", price: -1 },
    { "name2": "product 2", price: 0 },
    { "name2": "product 3", price: -3 },
]

function kiemTraSP(giaTien) {
    for (let i = 0; i < giaTien.length; i++) {
        if (giaTien[i].price > 0) {
            console.log("True")
            return true;
        }
    }
    console.log("False")
    return false;
}
kiemTraSP(gioHang)