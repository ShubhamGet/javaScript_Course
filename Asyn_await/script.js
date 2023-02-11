async function Shubh() {
    let BiharWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("29 Cles")
        }, 4000)
    })
    let DelhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 Cles")
        }, 8000)
    })
    // BiharWeather.then(alert)
    // DelhiWeather.then(alert)
    console.log("Fetching Bihar Weather kindly wait a while ")
    let BiharW = await BiharWeather
    console.log("Fetched Bihar Weather is " + BiharW)

    console.log("Fetching Delhi Weather kindly wait a while ")
    let DelhiW = await DelhiWeather
    console.log("Fetched Delhi Weather is " + DelhiW)

    return [BiharW, DelhiW]


}
const Maan = () => {
    console.log("Hey i am Maan and i am waiting")
}

const mains = async () => {
    console.log("Welcome to weather control room")
    let s = await Shubh()
    let m = await Maan()

}
mains()
