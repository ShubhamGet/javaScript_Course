let x = function (e) {
    alert("Hello world 1")
}
let y = function (e) {
    alert("helllo world 2")
}
btn.addEventListener('click', x)
btn.addEventListener('click', y)

let a = prompt("What is ur number");
if (a == '2') {
    btn.removeEventListener('click', x)
}
