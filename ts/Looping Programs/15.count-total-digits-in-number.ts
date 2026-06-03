let num: number = 123456;
let count: number = 0;
let temp: number = num;
while (temp > 0) {
    temp = Math.floor(temp / 10);
    count++;
}
console.log(count);
