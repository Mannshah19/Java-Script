"use strict";
let num = 153;
let temp = num;
let totalDigits = 0;
let sum = 0;
while (temp > 0) {
    totalDigits++;
    temp = Math.floor(temp / 10);
}
temp = num;
while (temp > 0) {
    let digit = temp % 10;
    let power = 1;
    for (let i = 0; i < totalDigits; i++) {
        power = power * digit;
    }
    sum += power;
    temp = Math.floor(temp / 10);
}
if (sum == num) {
    console.log("Armstrong");
}
else {
    console.log("Not Armstrong");
}
