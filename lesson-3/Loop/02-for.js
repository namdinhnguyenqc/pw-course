// In bảng cửu chương từ 2 đến 9.

for (let i = 2; i < 10; i++) {
    console.log("Bảng cửa chương của", i)
    for (let y = 1; y <= 10; y++) {
        let soNhan = i * y
        console.log(i, "x", y, "=", soNhan);

    }
    console.log()
}
