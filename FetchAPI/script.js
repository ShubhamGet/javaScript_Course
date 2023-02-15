let p=fetch("https://goweather.herokuapp.com/weather/sr")
p.then((value1)=>{
    console.log(value1.status)
    console.log(value1.headers)
    return value1.json()
}).then((value2)=>{
    console.log(value2)
})