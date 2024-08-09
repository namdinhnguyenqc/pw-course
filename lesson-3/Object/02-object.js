// Tạo một object person có thuộc tính name, address (là một object lồng với các thuộc tính street, city, country). In ra tên đường của người này.
let person = {
    "name": "Nguyen Dinh Ha Nam",
    "address": {
        "street": "90 Nguyen Van Cu",
        "city": "Tuy Hoa",
        "country": "Phu Yen"
    }
}

console.log(person.address.street);
console.log(person["address"["street"]]);