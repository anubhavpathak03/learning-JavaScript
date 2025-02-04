// checking if a number is greater than another number
let num1 = 3;
let num2 = 4;
if (num1 > num2) {
    // console.log("num1 is greater than num2");
} else {
    // console.log("num2 is greater than num1");
}


// checking if a string is equal to another string
let username = "Mr. M";
let anotherUsername = "Mr. M";

if (username == anotherUsername) {
    // console.log("pick another username");
}


// checking if a number is variable or not 
let score = "44"
if (typeof score === 'number') {  // using '===' is due to check even if typeof is same or not
    console.log("Yep, this is a number");
}else {
    console.log("No that is not a number");
    console.log(typeof score);
}


// checking if a boolean value is true or false
let isWeatherGood = true;
if(isWeatherGood) {
    console.log("Yep, weather is good");
}else {
    console.log("No wether is not good");   
}


// checking if an array is empty or not 
let items = ["item1", 1];
console.log(items.length);
if(items.length === 0) {
    console.log("Array is empty");
}else {
    console.log("Array is not empty")
}