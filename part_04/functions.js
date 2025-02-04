/**
1. write a function named 'makeTea' that takes one parameter, 'typeOfTea', and returns a string like '"making green tea"' when called with "green tea". store the result in a variable named 'teaOrder'.
 */

function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`;
}
let teaOrder = makeTea("green Tea");
console.log(teaOrder);


/** Q-2 */
function orderTea(teaType) {
    function confirmOrder() {
        return `Order confirmed for ${teaType}`;
    }
    return confirmOrder();
}
let orderConfirmation = orderTea("Coffee");
console.log(orderConfirmation);


/** Q-3 arrow function */
//function greet() {}
//const greet = () => {}
// () => {} //-> unnamed function 

// const calculateTotal = (price, quantity) => {
//     return price * quantity;
// }

const calculateTotal = (price, quantity) => price * quantity;
let totalCost = calculateTotal(100, 999);
console.log(totalCost);


/** Q-4 */
function makeTea(typeOfTea) {
    console.log(`3: Now in makeTea function making tea of type ${typeOfTea}`);
    return;
}

function processTeaOrder(teaFunction) {
    console.log(`1: passing argument in processTeaOrder which is makeTea`)
    console.log(`2: In processTeaOrder function makeTea is call with argument earl grey`)
    return teaFunction('earl grey')
}

let order = processTeaOrder(makeTea);
// here we passing function as an argument ot another function

// example is forEach loop 
// called first-class function


/** Q-5 */
function createTeaMaker() {
    return function(teaType) {
        return `Making ${teaType}`;
    };
};
let teaMaker = createTeaMaker(); // teaMaker holds a function 
let result = teaMaker("green Tea");
console.log(result);


/**************************************************************** */

// Making clousre  
function outerFn() {
    const outerVariable = "I'm outer variable";
    
    return function innerfn() {
        const innervariable = outerVariable;
        if(innervariable === outerVariable) {
            return "Yes able to access outer variable";
        }else {
            return "Not able to access outer variable";
        }
    }
}

let myfn = outerFn();
console.log(myfn());