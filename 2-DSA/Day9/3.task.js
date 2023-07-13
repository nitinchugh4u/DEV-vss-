let a  = [1,2,3,4];
a[2]= a.push(50);
console.log(a);
// 1,2,5,4,50

let a2 = [1,2,3,4];
a2[a2.pop(2)] = a2.push(50);
console.log(a2);
// [1,2,3,50,4]
// first left bracket will solve then right
