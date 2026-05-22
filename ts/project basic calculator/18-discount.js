"use strict";
let purchase = 6000;
let discount;
let finalAmount;
if (purchase > 5000) {
    discount = purchase * 0.15;
}
else {
    discount = purchase * 0.05;
}
finalAmount = purchase - discount;
console.log(`Purchase Amount: ₹${purchase}`);
console.log(`Discount: ₹${discount}`);
console.log(`Final Amount: ₹${finalAmount}`);
