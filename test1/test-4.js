function decryptCode(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            result += str[i].toUpperCase();
        }
        else if (str[i] === str[i].toUpperCase()) {
            result += str[i].toLowerCase();
        }
    }
    return result;
}
let str = "K8 Challenge";
console.log(decryptCode(str));
