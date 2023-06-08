
const addNums = (a,b) => {
    console.log("a,b",a, b);
    return a + b;
};

console.log(addNums(10,20));



const addNumsV2 = (a=100,b=100) =>{
    console.log("a,b",a,b);
    return a + b;
}; 
// console.log(addNumsV2(10,20));
console.log(addNumsV2(2,5));
