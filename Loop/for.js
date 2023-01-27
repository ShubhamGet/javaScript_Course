//Demo1
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
//Demo2 Program to add n natural number 

let sum = 0;
let n = prompt("Enter the value of n ");
n = Number.parseInt(n);
for (let i = 1; i <= n; i++) {
    sum = sum(n + 1) / 2
    console.log("Sum of first" + n + "natural number " + sum);
}
