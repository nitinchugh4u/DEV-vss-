// Decription

//  Array is a dynamic data structure in js to store any kind of  values
// support any length
// It is non primitive
// It is of an object type
// Its an instance or class of an array

const arr = [1,2,3,4,5];
const arr2 = [1,"nitin","nandini",5, false,{ name:"nitin"}, null, undefined,10.9];
const arr3 =[[1,3,[1,2],2]
[2,3],
]
const arr4 = [[1,2,3,4],[5,6,7,8],[9,10]]

// how to check a family class name
// -varible .constructor.namme

const arr5 = [1,2,3,4,5]
console.log(arr5.constructor.name);

// how ro check type
console.log(typeof arr5);

// how to check if an input is an array
let arry = [1,2]
Array.isArray(arry);

// how to check the whether it is valid array or not
Array.isArray(10);
// false
