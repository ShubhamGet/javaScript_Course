//Q5. use reduce to calculate factorail of a given number from an array of first n natural number.

let arr = [1, 2, 3, 4, 5];
let n = arr.reduce((num1, num2) => {
    return num1 * num2
})
console.log(n);