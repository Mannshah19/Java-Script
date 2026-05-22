let a:number = 10;
let b:number = 20;

let temp:number;

temp = a;
a = b;
b = temp;

console.log(`Value of a is ${a}`);
console.log(`Value of b is ${b}`);