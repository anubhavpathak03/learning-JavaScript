// generator function 
// this type of is special mention with * as you see in the code
// they not run everything in one go after calling function
// used with yeild rather than let, const, var inside the function

function* numberGenerator() {
    yield 1
    yield 2
    yield 3
}
let gen = numberGenerator();
let genTwo = numberGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log(genTwo.next().value);
console.log(genTwo.next().value);
