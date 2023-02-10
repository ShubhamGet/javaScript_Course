let promise = new Promise(function (resolve, reject) {
    alert("Hello ")
    resolve(56)
})
console.log("Hello one ");
setTimeout(function () {
    console.log("Hello in 2 second");
}, 2000)
console.log("My name is " + "Shubham");
console.log(promise);

