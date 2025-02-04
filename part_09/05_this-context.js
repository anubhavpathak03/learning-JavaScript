const person = {
    name: "Anubhav Pathak",
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
}

person.greet();

const greetFunction = person.greet; // here context of this loss 
greetFunction();

const boundGreet = person.greet.bind({
    name: "Sumit"
}) 
boundGreet();

// bind, call and apply