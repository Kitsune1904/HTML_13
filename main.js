//TODO: first variant

/*
const firstNum = +prompt("Write your first number");
const secondNum = +prompt("Write your second number");
const thirdNum = +prompt("Write your third number");

alert((firstNum + secondNum + thirdNum)/3) 
*/

//TODO: second variant

/* 
let sum = 0;
for (let i = 1; i<=3; i++) {
    sum += (+prompt(`Write your ${i} number`))
}
alert(sum/3) 
*/

//TODO: third variant

let num = 1;
let sum = 0;
while (num <= 3) {
    sum += (+prompt(`Write your ${num} number`))
    num++
}
alert(sum/3) 

