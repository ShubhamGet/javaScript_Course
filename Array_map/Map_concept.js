const arr = ['Shubham', 'Kumar', 'Singh'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// second method

console.log("Map Method");
const newarry = arr.map(function (value, index) {
    return index + ":" + value;
})
console.log(newarry);

// third way
console.log("Third Method \n");
<p id="ShowData"></p>
const StuData = [
    { id: 1, Name: "Shubham", Degree: "MCA", PassOut: "2023" },
    { id: 2, Name: "Maan", Degree: "BCA", PassOut: "2021" },
    { id: 3, Name: "Golu", Degree: "12th", PassOut: "2016" },
    { id: 4, Name: "Arnav", Degree: "10th", PassOut: "2013" },

];
const newData = StuData.map((value) => {
    return `My Name is ${value.Name}, My So for Degree is ${value.Degree} and the year passout is ${value.PassOut}`;
})
console.log(newData);

document.getElementById('ShowData').innerHTML = newData;
