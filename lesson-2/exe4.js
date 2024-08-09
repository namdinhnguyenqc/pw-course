const chieucao = 170;
const kgtoida = chieucao - 100;

// Cân nặng lý tưởng = Số lẻ của chiều cao (tính bằng cm) x 9 rồi chia 10
let kglytuong = kgtoida * 9 / 10;

// Mức cân tối thiểu = Số lẻ của chiều cao (tính bằng cm) x 8 rồi chia 10
let kgtoithieu = kgtoida * 8 / 10;

// Cân cân nặng lý tưởng của bạn là: 70 x 9: 10 = 63 kg
console.log("Cân cân nặng lý tưởng của bạn là: ", kglytuong, "kg", "Cân cân nặng tối đa của bạn là: ", kgtoida, "kg", "Cân cân nặng tối thiểu của bạn là: ", kgtoithieu, "kg");

