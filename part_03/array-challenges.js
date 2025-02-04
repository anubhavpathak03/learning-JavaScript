/**
 * Q - you have an array add element to it using push operation
 */

let cities = ["Mumbai", "Sydney"];
// cities[2] = "Berlin";
// cities[cities.length] = "Berlin";
cities.push("Berlin");
console.log(cities);


/**
    *Q- you have an array named 'teaOrders' with 'chai', 'iced tea', 'matcha', and 'earl grey'. 
    Remove the last element of the array using pop operation and store it in varibale named lastorder
*/

let teaOrders = ['chai', 'iced tea', 'matcha', 'iced tea'];
const lastOrder = teaOrders.pop();
console.log(teaOrders);
console.log(lastOrder);


/**
 * Q - you have an array create a soft copy of that array named softCopyTeas 
 */

/*
remember while creating soft copy here if any changes in orignal array `'popularTea'`then also changes in `'softCopyTeas'` because they act as reference 
*/

let popularTeas = ['green Tea', 'oolong Tea', 'Chai'];
let softCopyTeas = popularTeas;
popularTeas.pop();
console.log(softCopyTeas);

/**
 * Q - you have an array cities.
 * create a hard Copy of this array named hardCopyCities
 */
let topCities = ["Berlin", "singapore", "New York"];
let hardCopyCities = [...topCities]; // (rest & spread operators)
// let hardCopyCities = topCities.slice();
topCities.pop();
console.log(hardCopyCities);

/**
 * Q - you have two arrays name european cities and asiancities
 * merge these two arrays into a new array named worldcities
 */
let europeanCities = ["paris", "rome"];
let asianCities = ["Tokyo", "Bangkok"];

// let worldCities = [europeanCities, asianCities]; // this create 2D array
// let worldCities = europeanCities.concat(asianCities);
let worldCities = [...europeanCities, ...asianCities];
console.log(worldCities);


/**
 * Q - you have an array you task is to 
 * find the length of the arrayand store it in variable named 'menulength'
 */

let teaMenu = ["masala chai", "oolang tea", "green tea", "earl grey"]
let menuLength = teaMenu.length;
console.log(menuLength);

/**
 * Q - you have an array cityBucketList your task to 
 * check if particular city "london is present in your array and store it in result in a variable named "isLondonInList"
 */
 
let cityBucketList = ["kyoto", "Tokyo", "London", "cape Town", "vancouver"];

let isLondonInList = cityBucketList.includes("London")
console.log(typeof isLondonInList);
console.log(isLondonInList);


let arr = [3, 1, 2, 3, 3, 4];
console.log(arr.indexOf(3)); // return index of 3 present in first occurance
console.log(arr.indexOf(5)); // -1




