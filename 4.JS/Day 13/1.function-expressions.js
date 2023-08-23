/**
 * It is known as the following
 * - Function expressions
 * - Variable functions
 */

const addV1 = function (a,b){
    return a+b;
}

const add = (a,b) => a+b;

const multiply = (a,b) => a*b;

const customFunction = (a,b) =>{
    const sum = a+b;
    const mul = a*b;
    return sum+mul;

};


console.log("addV1: ", addV1(10, 80));
console.log("add: ", add(100, 80));
console.log("multiply: ", multiply(10, 80));
console.log("customFunction: ", customFunction(10, 80));


