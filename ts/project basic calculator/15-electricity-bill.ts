let units: number = 150;
let bill: number;

if (units <= 100) {
    bill = units * 5;
} else {
    bill = (100 * 5) + ((units - 100) * 8);
}

console.log(`Units consumed: ${units}`);
console.log(`Total Bill: ₹${bill}`);
