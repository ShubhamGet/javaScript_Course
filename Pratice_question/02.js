//Q2. keep adding number in array until zero is added in it.
let arr = [2, 3, 4, 5];
let num;
do {
    num = prompt("Enter a number ");
    num = Number.parseInt(num);
    arr.push(num);// used for insert number in Array
} while (num != 0);
console.log(arr);