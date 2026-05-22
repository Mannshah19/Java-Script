"use strict";
let username = "Mann";
console.log(username);
console.log("......Grade Calculator.......!");
let marks = 85;
if (marks > 90) {
    console.log("Grade A+");
}
else if (marks > 80) {
    console.log("Grade A");
}
else if (marks > 70) {
    console.log("Grade B+");
}
else if (marks > 60) {
    console.log("Grade B");
}
else if (marks > 50) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}
console.log("......Swap using temporary variable.......!");
let a = 10;
let b = 20;
let temp;
temp = a;
a = b;
b = temp;
console.log(`Value of a is ${a}`);
console.log(`Value of b is ${b}`);
