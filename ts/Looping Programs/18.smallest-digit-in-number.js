"use strict";
let num = 47392;
let smallest = 9;
let temp = num;
while (temp > 0) {
    let digit = temp % 10;
    if (digit < smallest) {
        smallest = digit;
    }
    temp = Math.floor(temp / 10);
}
console.log(smallest);
