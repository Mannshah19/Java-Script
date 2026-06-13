let num: number = 153;
let temp: number = num;
let totalDigits: number = 0;
let sum: number = 0;

while (temp > 0) {
    totalDigits++;
    temp = Math.floor(temp / 10);
}

temp = num;

while (temp > 0) 
    {
    let digit: number = temp % 10;
    let power: number = 1;
    for (let i: number = 0; i < totalDigits; i++) {
        power = power * digit;
    }
    sum += power;
    temp = Math.floor(temp / 10);
}

if (sum == num) {
    console.log("Armstrong");
} else {
    console.log("Not Armstrong");
}
