let num: number = 12345;
let reversed: number = 0;
let temp: number = num;
while (temp > 0) {
    reversed = reversed * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
}
console.log(reversed);
