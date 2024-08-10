function convertTimeToHex(time) {
    hexadecimal = time.toString(16);
    return hexadecimal;
}

let updateTime = convertTimeToHex(120);
console.log(`thời gian trên hành tinh này được tính theo hệ thập lục phân là : ${updateTime} giây`);
