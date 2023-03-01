let a={
    name2:"Shubham",
    language:"Java",
    run:()=>{
        alert("Run");
    }
}
console.log(a);

let p={
    run:()=>{
        alert("Run");
    }
}
p.__proto__={
    name:"Maan"
}
a.__proto__=p
a.run()
console.log(a.name)
