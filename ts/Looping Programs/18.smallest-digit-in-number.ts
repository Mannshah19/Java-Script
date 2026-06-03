let num: number = 47392;
let smallest: number = 9;
let temp: number = num;

while (temp > 0) {
    let digit: number = temp % 10;
    if (digit < smallest) {
        smallest = digit;
    }
    temp = Math.floor(temp / 10);
}
console.log(smallest);
