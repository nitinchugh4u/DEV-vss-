// 1234 -> 4321

// algo
// 1.we have an Number
// 2. number divide by 10 will give  number with one digit less
// 3/number % by 10 it will give last digit only

function numberOut(x){
let x1;
let x2;
let x3 ="";
let res;


 while(x!=0){
 x1 = x/10;  //123.3
 res = Math.round(x1)  //123

 x2 = x % 10; // 4 
 
x3 = x3 + x2  //4


x = res; //123
// console.log("hello",x);
// console.log(x1)
// console.log(x2);

}
return x3
}    
console.log(numberOut(1234));


// x = 1234
// let x1 = x/10; //123.4
// let res = Math.round(x1)
// console.log(res);
// let x2= x%10; //   4
// console.log(x1);
// console.log(x2);

