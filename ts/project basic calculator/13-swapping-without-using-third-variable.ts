let a:number = 10;
let b:number = 20;


a = a + b;
b = a - b;
a = a - b;

console.log(`Value of a is ${a}`);
console.log(`Value of b is ${b}`);