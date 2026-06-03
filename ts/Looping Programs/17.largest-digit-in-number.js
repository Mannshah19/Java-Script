"use strict";
let num = 47392;
let str = num.toString();
let largest = 0;
for (let i = 0; i < str.length; i++) {
    let digit = Number(str[i]);
    if (digit > largest) {
        largest = digit;
    }
}
console.log(largest);
