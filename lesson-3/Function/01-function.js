// Viết một hàm để tính chỉ số BMI (Body Mass Index) dựa trên chiều cao (mét) và cân nặng (kg) và trả về phân loại BMI (Thiếu cân, Bình thường, Thừa cân, Béo phì).
// Biết:
// Chiều cao được tính theo đơn vị mét (VD: 1.75m)
// Cân nặng tính theo kg
// Công thức tính BMI: cân nặng / (chiều cao * cân nặng)
// BMI < 18.5: thiếu cân
// BMI < 25: Bình thường
// BMI < 30: Thừa cân
// BMI >= 30: Béo phì

function BMI(met, kg) {
    SoBMI = kg / (met * met);
    if (SoBMI < 18.5) {
        return ("Thiếu cân");
    }
    else if (SoBMI < 25) {
        return ("Bình thường");
    }
    else if (SoBMI < 30) {
        return ("Thừa cân");
    }
    else if (SoBMI >= 30) {
        return ("Béo phì");
    }
}
console.log(BMI(1.70, 80));
