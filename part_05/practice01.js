const a = 18;
const b = 24;

function add(a, b) {
    return a+b;
}
let adding = add(a, b);
// console.log(adding);

/** 
 * Q - 2 Removing duplicate elements
 */

// using set 
let arr = [1,2,3,4,4,5,6];
let s = new Set(arr);
let newArray = [...s];
// console.log(newArray);


// using filter 
let array = [10, 20, 20, 30, 40, 50, 50];

// Using filter with indexOf to find the repeated elements
a1 = array.filter((item, index) => array.indexOf(item) === index);

// console.log(a1);
/**
 * remember indexOf helps to find the first occurence of element in an array
 */

/** Q-3 */
const mixedArray = [1, 'hello', 2, true, 3.14, 'world', 4];
console.log(mixedArray.filter(item => typeof item === 'number'));


/** Q-4 */
function outer() {
    function inner() {
        return `'Inner function called'`
    }
    return inner();
}
console.log(outer());