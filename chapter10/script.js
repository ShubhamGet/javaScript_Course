//Q1: use a free api from the internet and feed ur app with live data
let url="https://kontests.net/api/v1/all"
let response=fetch(url)
response.then((val)=>{
  return val.json()
}).then((contest)=>{
   console.log(contest)
   ithml=""
   for(item in contest){
    console.log(contest[item])
    ithml+=`
    <div class="card" style="width: 22rem;">
                <img src="/chapter10/images.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${contest[item].name}</h5>
                  <p class="card-text">Status is ${contest[item].status} and site is: ${contest[item].site}</p>
                  <p class="card-text">In 24 Hours ${contest[item].in_24_hours}</p>
                  <p>start at:${contest[item].start_time}</p>
                  <p>start at:${contest[item].end_time}</p>
                  <a href="${contest[item].url}" class="btn btn-primary">Visit contest</a>
                </div>
    `
   }
   cardContainer.innerHTML=ithml
})

let a=prompt("Enter your Note")
alert("Your note is "+n)
localStorage.setItem("note",a)
localStorage.getItem("note")