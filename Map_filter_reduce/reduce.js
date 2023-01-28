let num = [3, 3, 4, 5, 3, 2, 1];
const reduce_fun = (v1, v2) => {
    return v1 + v2
}
let num1 = num.reduce(reduce_fun);
console.log(num1);