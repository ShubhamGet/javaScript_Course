let a = Math.random() * 100;
console.log(a);
a = Number.parseInt(a)
let inp;
let score = 100;
while (inp != a) {
    score = score - 1;
    inp = prompt("Enter the number ");
    if (inp == a) {
        console.log("Congrate ! You Guess the correct number ");
        console.log(`You Guess the actuall number in ${100 - score} chances`)
    }
    else if (inp > a && inp < 100) {
        console.log("Ur number is greater than the actual number");
    }
    else if (inp < a && inp > 0) {
        console.log("Ur number is Smaller than the actual number");
    }
    else {
        console.log("Enter the number b/w 1 to 100");
    }
}