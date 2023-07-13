let a2 = [1,2,3,4];
let a = a2;
console.log(a);
const poppedElem = a2.pop();
console.log(a2);
console.log(poppedElem)
// it give the only  element
const newlen = a2.push(50);
console.log(a2);
console.log(newlen);
// it give the length of the array after push eleent
console.log(a2);
a2[poppedElem] = newlen; 
console.log(a2);

// let a1 = [1,2,3,4,5,6,3,4,43];
// let x = a1;
// console.log(x);
// let y = a1.pop();
// // y will store  the pop element only
// console.log(a1);
// console.log(y);
// let z = a1.push(50);
// console.log(a1);
// console.log(z);

