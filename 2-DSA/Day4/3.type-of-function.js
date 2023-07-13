// Normal function
function tryMe(){}

// Arrow Function
const addNumV2 = (a,b) => {
return a + b;
};

console.log(addNumV2);
addNumV2(10,20);
console.log(addNumV2());
console.log(addNumV2(20,20));
let res = addNumV2(5,5);
console.log(res);
//  addNumV2 = addNumV2(7,7);
// console.log(addNumV2); 
const addNumV3 = (a,b) => a + b;
console.log(addNumV3);
console.log(addNumV3(3,3));

const addNumV4 = function(a,b){
return a + b;
};


console.log(addNumV4(2,2));




// Function whih perform addition of two number
// Data- Parametres

function addNumbers(a,b){
    const sum  = a + b;
    return sum;
}
 const sum = addNumbers(10,20);
 console.log("sum:" , sum);   // data -> Arguments.
 console.log(addNumV3(10,20)) // data -> Arguments
 console.log(addNumV3(20,20));   // data -> Argumentsconsole.log("sum:" , sum);   // data -> Arguments
 console.log(addNumV2(10,20));   // data -> Arguments
 console.log(addNumV2(20,20));   // data -> Arguments
 console.log(addNumbers(30,30))   // data -> Arguments
 console.log(addNumbers(40,40));   // data -> Arguments
