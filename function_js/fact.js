function Fact(num) {
    if (num == 0) {
        return 1;
    }
    else {
        return (num * Fact(num - 1));
    }
}
console.log("Factorial of a number is " + Fact(5));