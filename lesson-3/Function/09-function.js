// Viết hàm có tham số là tuổi, in ra mức giá vé vào cổng tùy theo độ tuổi: trẻ em dưới 5 tuổi miễn phí, người lớn từ 18 tuổi trở lên là 100k, và trẻ em từ 6 đến 17 tuổi là 50k.

function giaVe(tuoi) {
    if (tuoi <= 5 && tuoi > 0) {
        console.log("Miễn phí giá vé");
    }
    else if (tuoi > 18) {
        console.log("Giá vé là 100k");;
    }
    else if (tuoi > 5 && tuoi < 18) {
        console.log("Giá vé là 50k");
    }
    else {
        console.log("Tuổi không hợp lệ");
    }
}

giaVe(5) //check giá vé miễn phí dưới 5 tuổi
giaVe(19) //check giá vé 100k
giaVe(7) //check giá vé 50k
giaVe(0) //tuổi không hợp lệ
