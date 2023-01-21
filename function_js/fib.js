function Fib(n) {
    if (n == 0 || n == 1) {
        return 1
    }
    else {
        return (Fib(n - 1) + Fib(n - 2));
    }
}
for (let i = 0; i <= 10; i++) {
    console.log("Fibnaci Serires " + Fib())
}