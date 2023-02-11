/*
try {
    let a = 0
    console.log(Shubham)
    console.log("Program run successful")
} catch (error) {
    console.log("This is an error")
}
finally {
    console.log("i am A good boy")
}
*/

let num = prompt("Enter nominator ")
num = Number.parseInt(num)
let div = prompt("Enter denomator")
div = Number.parseInt(div)
try {
    if (div != 0) {
        let rslt = num / div
        console.log("Division of number is " + rslt)
    }
    else {
        throw new ReferenceError("dont put zero in demonator ")

    }

} catch (error) {
    console.log("This is throwig an error " + error)
}
finally {
    console.log("Done ")
}