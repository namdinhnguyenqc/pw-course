// Tạo mảng chứa các kí tự nghịch đảo từ một chuỗi đã cho. Ví dụ với chuỗi ”Playwright” thì mảng kết quả sẽ là [“t”, “h”, “g”, “i”, “r”, “w”, “y”, “a”, “l”, “P”]

function chuyenGiaTri(str) {
    let mangRong = [];

    for (let x of str) {
        mangRong.unshift(x);
    }

    return mangRong;
}

let input = "laywright";
let mangRong = chuyenGiaTri(input);

console.log(mangRong);