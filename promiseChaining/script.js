let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Resovle after 2 second")
    }, 2000)
})
p1.then((value) => {
    console.log(value)
    let p2 = new Promise((resole, reject) => {
        setTimeout(() => { resole("Promise 2") }, 2000)

    })
    return p2
}).then((value) => {
    console.log("We are done")
})