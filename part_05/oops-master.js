let car = {
    make : "Toyota",
    model: "hilex",
    year : 2023,
    start: function () {
        return `${this.make} car got started in ${this.year}`;
    },
}
// console.log(car.start());

/** constructor function */
function Person (name, age) {
    this.name = name;
    this.age = age;
}
let p1 = new Person("anubhav", 20);
// console.log(p1.name, p1.age);

/** prototype chain */
function Animal (type) {
    this.type = type;
}
Animal.prototype.speak = function() {
    return `${this.type} make a sound`
}


Array.prototype.anubhav = function() {
    return `Custom method ${this}`;
};

let myArray = [1,2,3];
// console.log(myArray.anubhav());
let myNewArray = [1,2,3,4,5,6];
// console.log(myNewArray.anubhav());




/** class */

// Inheritance
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        return `${this.model} is a car from ${this.make}`
    }
}
class Car extends Vehicle {
    drive() {
        return `${this.make} : This is an inheritance example`;
    }
}
let myCar = new Car("Toyoto", "hilex");
// console.log(myCar.start());
// console.log(myCar.drive());

let VehicleOne = new Vehicle("Toyoto", "hilex");
// console.log(VehicleOne);


/** Encapsulation 
 * it means restrict the direct access of object data
 * 
 *Encapsulation is essentially the ability to hide the internal details of an object and only show the necessary parts.
*/

class bankAccount {
    #balance = 1001000; // here # helps to do things private
    deposit(amount) {
        this.#balance += amount;
        
    }
    getBalance() {
        return `$ ${this.#balance}`;
    }
}
let account = new bankAccount();
// console.log(account.balance);
// console.log(account.getBalance());

/** Abstraction  */
class coffeeMachine {
    start() {
        // call DB
        // filter value
        return `starting the machine.....`
    }
    brewCoffee() {
        // complex calculation
        return `Brewing coffee`;
    }
    pressStartButton () {
        let msg1 = this.start();
        let msg2 = this.brewCoffee();
        return `${msg1}\n${msg2}`;
    }
}
let myMachine = new coffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());


/** Polymorphism */

class Bird {
    fly() {
        return `Flying....`
    }
}

class Penguin extends Bird {
    fly() {
        return `Penguin can't fly....`
    }
}

let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());

/** Static method 
 * these method are special because they only called by class only
*/
class Calculator {
    static add(a, b) {
        return a+b;
    }
    add_without_static (a, b) {
        return a+b;
    }
}

let miniCalc = new Calculator();
// console.log(miniCalc.add_without_static(6, 7));
// console.log(miniCalc.add(6, 7)); gives error 
// console.log(Calculator.add(19,1000));


/** Getter and Setters */
class Employee {
    #salary;
    constructor(name, salary) {
        if(salary < 0) {
            throw new Error("salary going in -ve, you don't do work know");    
        }
        this.name = name;
        this.#salary = salary;
    }
    get salary () {
        return `You are not allowed to see the salary`;
    }
    set salary(value) {
        if(value < 0) {
            return `invalid Salary`;
        }else {
            this.#salary = value;
            return this.#salary;
        }
    }
}
let emp = new Employee("Bob", 500000);
console.log(emp.salary);
emp.salary = 400000;
console.log(emp.salary);


// example 

class ClassWithGetSet {
  #msg = "hello world";
  get msg() {
    return this.#msg;
  }
  set msg(x) {
    this.#msg = `hello ${x}`;
  }
}

const instance = new ClassWithGetSet();
console.log(instance.msg); // "hello world"

instance.msg = "cake";
console.log(instance.msg); // "hello cake"

