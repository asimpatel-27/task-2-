let name = "Asim";
const age = 20;
let isStudent = true;

let prices = [499, 1299, 799, 2500, 999];

console.log("Name:", name);
console.log("Age:", age);
console.log("Student:", isStudent);

for (let price of prices) {
    if (price > 1000) {
        console.log("Price above ₹1000:", price);
    }
}

let total = 0;

for (let price of prices) {
    total += price;
}

console.log("Total Price:", total);

if (total > 5000) {
    console.log("High Value");
} else if (total >= 3000) {
    console.log("Medium Value");
} else {
    console.log("Low Value");
}

let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Other Day");
}