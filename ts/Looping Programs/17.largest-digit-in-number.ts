let num: number = 47392;
let largest: number = 0;
let temp: number = num;

while (temp > 0) {
    let digit: number = temp % 10;
    if (digit > largest) {
        largest = digit;
    }
    temp = Math.floor(temp / 10);
}
console.log(largest);
