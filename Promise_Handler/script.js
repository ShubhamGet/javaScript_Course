let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        //alert("Hey i am not resve")
        resolve(1);
    }, 2000)
})
p1.then(() => {
    console.log("Congrats, this promise is now resolved ")
})

p1.then(() => {
    alert("Hurray");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(100);
        }, 1000)
    })
}).then((value) => { console.log(value) })
p1.then(() => {
    alert("hip hip Hurray")
})