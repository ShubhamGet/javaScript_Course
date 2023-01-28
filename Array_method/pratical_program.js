// Array method

//1. toString()
let num = [1, 2, 3, 4, 5];
let num2 = num.toString() // b is now become a string
console.log(num2);
console.log(typeof (num2));

//2. join

//let num3 = num.join(" and "); or
let num3 = num.join(" _ ");
console.log(num3);
console.log(typeof (num3));

//3. pop method
console.log("Pop the element with return value")
let r = num.pop() // pop returns the pop element 
console.log(num, r);

//4. push()

console.log("Push the element with new length array")
num.push(10)
console.log(num);