//Q1. Create a variable of type string and try to add a number 

var name = "Shubham Kumar Singh"
var num = 9097743108
console.log(name + num);

//Q2. find the typeof varibale 

console.log(typeof (name + num));

//Q3. create a const object js can u change it to hold a number later
//Ans: wrong

const info = {
    name: "Shubham",
    section: 1,
    rollno: 210122055
}
console.log(info);

//Q4. Try to add a new ke to the const object in problem 3 were u able to do ot.
const info1 = {
    name: "Shubham",
    section: 1,
    rollno: 210122055
}
info1['friend'] = "Maan"
info1['name'] = "SHubham Singh"
console.log(info1);

//Q5. wirite a js program to create a word-meaning of five words;

const dict = {
    A: "Apple",
    B: "Boy",
    C: "Cat",
    D: "Dog",
    E: "Elephent"
}
console.log(dict);
console.log(dict.E);
// or
console.log(dict["E"]);


