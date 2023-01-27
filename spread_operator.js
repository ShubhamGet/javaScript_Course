// spread operator: bassicaly used for concat the data
//1'st case
const name = ["Shubham", "Singh"];
const boidata = [1, 24, "Male", ...name];
console.log(name);
console.log(boidata);

//2nd case

const love = ["i love to study", "i love to my work", "i love to ego", "Hahahahah"];
const affair = [...love, " i have affair to no one", "Don't think too much"];
console.log(love);
console.log(affair);


// or

const love1 = ["i love to study", "i love to my work", "i love to ego", "Hahahahah"];
const [first, ...remaining] = love1;
console.log(love1);
console.log(remaining);

