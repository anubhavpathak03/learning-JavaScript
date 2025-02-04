function sayHello() {
    console.log("hello everyone");
}

setTimeout(() => {
    sayHello();
}, 4000);

console.log("Welcome On Learning asynchronous JavaScript & Event Loop");

for (let index = 0; index < 5; index++) {
    console.log(index);
}