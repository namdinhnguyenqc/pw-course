// Viết một hàm để lọc ra các số nguyên tố từ một mảng số đã cho.
// Biết:
// Số 0, số 1 không phải số nguyên tố.
// Các số nguyên tố là số chỉ chia hết cho 1 và chính nó


function locSoNguyenSo(loc) {
    if (loc <= 1) {
        return false
    }
    for (let i = 2; i < 100; i++) {
        if (i % i === 0 && i % 2 === 0) {
            return false
        }
    }
    return true;
}
locSoNguyenSo(loc)