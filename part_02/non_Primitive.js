const username = {
    firstName: "Mr. Manoj",
    lastName: "Pathak",
    isloggedIn: false,
};

username.firstName = "Mr. M";

// console.log(username.firstName);
// console.log(username);
// console.log(username['lastName']); //=> way of accessing
// console.log(typeof username);


let today = new Date();
// console.log(today.getDate());


// Array

// -> here different types are also allowed 
let heros = ["Mr. Bruce Wayne", "Mr. Tony Stark", true, 1];
// console.log(heros[0]);

// ********* Conversion ********
// generally impicit type conversion // means it automatically handle the issue
let isValue = true;
console.log(Number(isValue) + 1); // => 2

console.log(1+"1"); // => 11
console.log(typeof (NaN))
console.log(typeof (undefined))
console.log(Number(null));
console.log(Number(undefined));
console.log(1-"1");
console.log("1"+1);
