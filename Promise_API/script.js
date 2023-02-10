/*
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("val 1");
    }, 2000)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("val 2");
    }, 5000)
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("val 3");
    }, 8000)
})

p1.then((val) => {
    console.log(val);
})
p2.then((val) => {
    console.log(val);
})

p3.then((val) => {
    console.log(val);
})

let promise_all = Promise.all([p1, p2, p3])
promise_all.then((value) => {
    console.log(value)
})

*/

/*
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("val 1");
    }, 2000)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("New Error");
    }, 5000)
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("val 3");
    }, 8000)
})

let promise_all = Promise.allSettled([p1, p2, p3])
promise_all.then((value) => {
    console.log(value)
})
*/
/*
let p1 = new Promise((resolve, reject) => {
   setTimeout(() => {
       resolve("val 1");
   }, 11000)
})
let p2 = new Promise((resolve, reject) => {
   setTimeout(() => {
       resolve("val 2");
   }, 5000)
})
let p3 = new Promise((resolve, reject) => {
   setTimeout(() => {
       resolve("val 3");
   }, 8000)
})

let promise_all = Promise.race([p1, p2, p3])
promise_all.then((value) => {
   console.log(value)
})

*/

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("val 1");
    }, 11000)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(" New Error ");
    }, 5000)
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("val 3");
    }, 8000)
})

let promise_all = Promise.any([p1, p2, p3])
promise_all.then((value) => {
    console.log(value)
})