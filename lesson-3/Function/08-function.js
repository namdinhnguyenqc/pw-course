// Viết hàm có một tham số là giờ, in ra cửa hàng còn mở cửa hay không. Biết cửa hàng mở cửa từ 9 giờ sáng đến 9 giờ tối.

function timeOpen(gio) {
    if (gio >= 9 && gio <= 21) {
        console.log("Cửa hàng còn mở cửa")
    }
    else {
        console.log("Cửa hàng đã đóng cửa")
    }
}
timeOpen(7) //Check cửa hàng đã đóng cửa
timeOpen(10) //Check cửa hàng đang mở cửa
timeOpen(22) //Check cửa hàng đã đóng cửa
