let num: number = 12321;
let reversed: number = 0;
let temp: number = num;

while (temp > 0) {
    let digit: number = temp % 10;
    reversed = reversed * 10 + digit;
    temp = Math.floor(temp / 10);
}

if (num == reversed) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}
