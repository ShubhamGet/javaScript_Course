const createToDo=async()=>{
let options={
    method:'Post',
    headers:{
        "Content-type":"application/json"
    },
    body: JSON.stringify({
        title: 'Shubham',
        body: 'Singh',
        userId: 6666,
      }),
}
let p=await fetch('https://jsonplaceholder.typicode.com/posts', options)
let response=await p.json()
return response
}

const getaTodo=async(id)=>{
    let response=await fetch('https://jsonplaceholder.typicode.com/posts' +id)
    let r=await response.json();
    return r
}

const mainFun=async()=>{
    let todo=await createToDo()
    console.log(todo)
    console.log(await getaTodo(5))
}
mainFun()