/*
document.getElementById('google').addEventListener('click', function () {
    window.location = "https://google.com"
    window.focus();

})
document.getElementById('facebook').addEventListener('click', function () {
    window.location = "https://facebook.com"
    window.focus();
})
document.getElementById('twitter').addEventListener('click', function () {
    window.location = "https://twitter.com"
    window.focus();
})

const fetchContent = async (url) => {
    con = await fetch(url);
    let a = await con.json()
    return a;
}

setInterval(async function () {
    let url = 'https://jsonplaceholder.typicode.com/todos/1'
    console.log(await fetchContent(url))
}, 3000)
*/

setInterval(async function () {
    document.querySelector("#bulb").classList.toggle("bulb")
        , 3000
})