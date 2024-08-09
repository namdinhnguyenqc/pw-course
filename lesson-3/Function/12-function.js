// Viết hàm có một tham số là nhiệt độ, in ra nhiệt độ và thông báo trạng thái thời tiết: nóng (>= 30 độ C), mát (< 30 độ C và >= 20 độ C), lạnh (< 20 độ C)


function thoiTiet(nhietDo) {
    if (nhietDo >= 30) {
        console.log("Nóng");
    }
    else if (nhietDo < 30 && nhietDo >= 20) {
        console.log("Mát");
    }
    else {
        console.log("Lạnh")
    }
}

thoiTiet(30) //Check trời nóng
thoiTiet(28) //Check trời mát
thoiTiet(-1) //Check trời lạnh