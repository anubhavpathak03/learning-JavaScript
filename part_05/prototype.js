//accessing any prototype
let computer = {
    CPU: 12,
    RAM: 16 
};
let hp = {
    "screen" : "HD", 
    __proto__: computer // by this `__proto__` we access all the property of computer object also
};

// console.log(`computer`, computer.__proto__);
// console.log(`hp`, hp.__proto__);



let genericCar = {tyres: 4};
let tesla = {
    driver: "AI"
}
Object.setPrototypeOf(tesla, genericCar);
console.log(`tesla`, Object.getPrototypeOf(tesla));
console.log(`tesla`, Object.hasOwn(tesla, 'tyres'));
console.log(tesla.tyres);
