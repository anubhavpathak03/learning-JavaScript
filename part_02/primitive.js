// number 
let balance = 120;
let anotherBalance = new Number(120);

// console.log(balance);
// console.log(anotherBalance.valueOf());


// console.log(typeof balance);
// console.log(typeof anotherBalance);


// NUll and Undefined

let firstname = null;
let lastname = undefined;
console.log(firstname);
console.log(lastname);

// string 

let myString = "hello";
let myStringOne = 'hola';
let username = 'anubhav';

let oldGreet = myString + " " + "anubhav";
console.log(oldGreet);

let greetMessage  = `hello ${username}!`;  
// -> this is called string manupulation

console.log(greetMessage);

// symbol -> that guaranteed to uniqueness 
let sm1 = Symbol("anubhav");
let sm2 = Symbol("anubhav");

console.log(sm1 == sm2);
console.log(sm1);
console.log(sm2);

