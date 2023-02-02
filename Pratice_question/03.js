//Q3. filter for number divisible by 10 from a given array
let arr = [2, 3, 4, 5, 60, 70, 20];
let n = arr.filter((num) => {
    return num % 10 == 0
})
console.log(n);