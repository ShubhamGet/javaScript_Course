//Q1. write a program to load a javaScript file in a browese using Promise. use .then() to display an alert when the load is complete
//Q2. Wirte the same program from previuous question and use async/awit Syntax
const loadScript=(src)=>{
    return new Promise((resolve,reject)=>{
        let script=document.createElement("script")
        script.src=src
        script.onload=()=>{
           resolve(src)
        }
        document.head.append(script)
    })
}
/*
// problem 1
let a= await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")
a.then((val)=>{
    console.log(val)
})
*/
/*
// problem2
const main2=async ()=>{
    console.log(new Date().getSeconds())
    let a= await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")
    console.log(a)
    console.log(new Date().getSeconds())

}
main2()
*/
/*
// proble3, create a promise which reject after 3 seconds use an sync/await to get its value. use a try cathc to handle its error
let p=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error("Plze this is not acceptable"))
        },3000)
    })
}
let a=async()=>{
    try {
        let c=await p()
        console.log(c)
    } catch (error) {
        console.log("This error has been handled")
    }
}
a()
*/

// Q4. write a program using Promise.all() inside an async/await to await 3 promises. comapre its rsults with the case where we await these Pormises one by one 
let p1=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("P1")
        },2000)
    })
}
let p2=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("p2")
        },4000)
    })
}
let p3=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("p3")
        },6000)
    })
}
const run=async()=>{
   console.time("run")

  // let a1=await p1();
   //let a2=await p2();
   //let a3=await p3();
    let a1=await p1();
    let a2=await p2();
    let a3=await p3();
    let a1a2a3=await Promise.all([a1,a2,a3])
    console.log(a1a2a3)
 //  console.log(a1,a2,a3)
   console.timeEnd("run")

}
run()