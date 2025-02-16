function Person(name, age) {
    this.name = name;
    this.age = age;
};
// object inherit property from other object using prototype chain
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} & my age is ${this.age}`);
};

let anubhav = new Person("anubhav", 21);
anubhav.greet();
console.log(anubhav);