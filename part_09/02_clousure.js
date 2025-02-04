function outer() {
    let number = 4;
    return function () {
        number++;
        return number;
    }
}
let increment = outer();
console.log(increment()); // 5
console.log(increment()); // 6
console.log(increment()); // 7
