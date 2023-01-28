// normal loop
let name = ["Shubham", "Maan", "Golu", "Shubh", "Kavya", "Jiya"];
for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}

// for each loop
name.forEach(element => {
    console.log(name);
});
// or
let num = [1, 2, 3, 4];
num.forEach(element => {
    console.log(element * element);
});

// array.from

let name1 = "Shubham Singh";
let arr = Array.from(name1);
console.log(arr);


// for of

for (let i of name) {
    console.log(name);
}

// for in

for (let i in num) {
    console.log(num[i]);
}