function person(name, age) {
    this.name = name;
    this.age = age;
}

function Car(make, model) {
    this.make = make;
    this.model = model;
}
let myCar = new Car("Toyoto", "Carry");
// console.log(myCar);


function Tea(type) {
    this.type = type;
    this.describe = function () {
        return `this is a cup of ${this.type}`;
    };
}
let lemonTea = new Tea("lemon Tea");
// console.log(lemonTea);
// console.log(lemonTea.describe());


// 
function Animal(species) {
    this.species = species;
}
Animal.prototype.sound = function () {
    return `${this.species} makes a sound`;
}
let dog = new Animal("dog")
// console.log(dog.sound());

let cat = new Animal("cat")
// console.log(cat.sound());

function Drink(name) {
    if(!new.target) {
        throw new Error("Drink must be called with new Keyword");    
    }
    this.name = name;
};
let tea = new Drink("tea");
let coffee = new Drink("coffee");