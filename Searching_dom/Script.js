// change card titile to red
let c = document.getElementsByClassName("Hello")
c.style.color = "red"

// change pairagraph color to green

let t = document.getElementById("card-text")
t.style.color = "green"


// or
let ctitle = document.querySelectorAll(".Hello")
ctitle[0].style.color = "red"
ctitle[1].style.color = "green"
ctitle[2].style.color = "blue"
console.log(ctitle);