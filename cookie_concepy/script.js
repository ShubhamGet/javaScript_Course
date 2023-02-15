console.log(document.cookie)
document.cookie="Shubham Kumar Singh"

let key=prompt("Enter ur key")
let value=prompt("Enter ur value")
document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)