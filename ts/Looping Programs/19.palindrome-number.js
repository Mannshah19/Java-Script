"use strict";
let num = 12321;
let reversed = 0;
let temp = num;
while (temp > 0) {
    let digit = temp % 10;
    reversed = reversed * 10 + digit;
    temp = Math.floor(temp / 10);
}
if (num == reversed) {
    console.log("Palindrome");
}
else {
    console.log("Not Palindrome");
}
