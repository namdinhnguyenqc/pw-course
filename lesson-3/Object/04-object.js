// Tạo một object product với các thuộc tính là tên các sản phẩm và giá trị là giá của chúng. Dùng vòng lặp for...in để in ra tên và giá của mỗi sản phẩm.

let product = {
    "ten": "iphone",
    "gia": 100
}

for (x in product) {
    console.log(product[x])
}