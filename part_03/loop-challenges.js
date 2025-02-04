/** Q-1 */
let sum = 0, i = 0;
while(i <= 5) {
    sum += i;
    i++;
}
// 1+2+3+4+5 = 15
// console.log("sum is:->", sum);

/** Q-2 */
let countDown = [];
let j = 5;
while(j > 0) {
    countDown.push(j);
    j--;
}
console.log(countDown);

/** Q-3 */ 
// run this in browser
/*

let teaCollection = [];
let tea;
do {
    tea = prompt(`Enter your favourite sports (type "stop" to finish)`);
    if(tea !== "stop") {
        teaCollection.push(tea);
    }
} while (tea !== "stop");

*/

/** Q-4 */
let total = 0;
let k = 1;
do {
    total += k;
    k++;
} while (k <= 3);
console.log(total);

/** Q-5 */
let multipliedNumbers = [];
let numbers = [2,4,6];

for(let l = 0; l<numbers.length; l++) {
    multipliedNumbers.push(numbers[l]*2);
}
console.log(multipliedNumbers);


/** Q-6 */
let cities = ["Pairs", "NewYork", "Tokyo", "London"];
let cityList = [];

for (let c = 0; c < cities.length; c++) {
    const element = cities[c];
    cityList.push(element);
}
console.log(cityList);

/** Q-7 
 * we have array we have to stopped the loop when it finds chai
*/
let tea = ["black Tea", "matcha", "chai", "oolong Tea"];
let selectedTeas = [];
for (let i = 0; i < tea.length; i++) {
    if(tea[i] === "chai") {
        break;
    }
    selectedTeas.push(tea[i]);
}
console.log(selectedTeas);

/** Q-8 */
let array = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of array) {
    if(num === 4) {
        break;
    }
    smallNumbers.push(num);
}
console.log(smallNumbers);

/** Q - 9 
 *  use a for-in loop to loop through an object containing city population
 * stop the for loop when the population of "berlin" is found and store all previous cities population in a new object named cityPopulations
 * 
 * let citiesPopulation {
 * "London" : 8900000,
 * "New York" : 8400000,
 * "Paris" : 2200000,
 * "Berlin" : 3500000,
 * }
 * 
 * 
*/
let citiesPopulation = {
    "London" : 8900000,
    "NewYork" : 8400000, // this is object
    "Paris" : 2200000,
    "Berlin" : 3500000,
}
let cityNewPopulations = {};
console.log(Object.keys(citiesPopulation));
console.log(Object.values(citiesPopulation));

for (const city in citiesPopulation) {
    if(citiesPopulation[city] <= 3000000) {
        continue;
    }
    cityNewPopulations[city] = citiesPopulation[city];
}
console.log(cityNewPopulations);

/** Q-10 
 *       ForEach loop
 * */
let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
teaCollection.forEach(function(tea) {
    if(tea === "chai") {
        return;
    }
    availableTeas.push(tea);
});
console.log(availableTeas);


/** Q-11 */
let myWorldCities = ["Berlin", "Paris", "Silicon Valley", "London", "Japan"];
let tarvelCities = [];
myWorldCities.forEach(city => {
    if(city === "Paris") {
        return;
    }
    tarvelCities.push(city);
});
console.log(tarvelCities);
