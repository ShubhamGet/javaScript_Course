/*
const sum = (a, b) => {
    console.log("Yes, i am running " + (a + b))
    a + b
}
*/
//setTimeout(sum, 1000, 1, 2)
//setInterval(sum, 1000, 1, 2)
/*
document.write("Hello")
setTimeout(function () {
    alert("I am inside of settimeOut")

}, 5000)

let b = prompt("Do u want to run the settimeOut ?")
if ("n" == b) {
    clearTimeout(a)
}
console.log(a)

*/




const sum = (a, b) => {
    console.log("Yes, i am running " + (a * b))
    a + b
}

setInterval(sum, 1000, 1, 2)


/*
document.write("Hello")
setInterval(function () {
    alert("I am inside of settimeInterval")

}, 5000)

*/