const arr =[1,2,3,4,5,6,7,8,9];

// splice 

// description
// It is  method to mutate or affect the main array
// first Argument  - start index
// second Argument - delete up to number 
// third Argument  - new data

const result = arr.splice(2,4)
console.log(result);
console.log(arr);

const arr2 = [1,2,3,4,5,6,7,8,9]
arr2.splice(1,4,20)
console.log(arr2);
console.log(arr2.length);