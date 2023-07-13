n =5
//  row = 5;
//  star in 1st row for n=5 = 9
//  star in 1st row for n=7 = 13
//  star in 1st row for n=9 = 17

// pattern
// n=5 (star will be 9 => 7 => 5=> 3=> 1)

// *********
//  *******
//   *****
//    ***
//     *

res ="";
for(let i =1; i<=n;i++){
  for(x=1;x<=i;x++){
    res =res + " ";
  }
  for(let j =i; j<=n*2-i; j++){
    res = res +"*";
    
  }
  res = res +"\n";

}
console.log(res);0


// let a = "";
// let b = "b";
// let c = a+b;
// console.log(c);
