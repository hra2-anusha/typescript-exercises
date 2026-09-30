export {};
let username: string = "Anu";
console.log(`Hello, ${username}!`);
//variables
//declaring variables in 3 types

//1 with type and value

export {};
let name: string = "Anu";
const age: number = 30;

//2 type without value

let city!: string;
console.log(city);

//3 value without type

let country = "India";
console.log(country);
console.log(typeof country);

//let - mutable, const - immutable
let myAge = 24;
myAge = 25;
console.log(myAge);

const myCurrentAge = 24;
//myCurrentAge = 25;
console.log(myCurrentAge);

//type annotations

