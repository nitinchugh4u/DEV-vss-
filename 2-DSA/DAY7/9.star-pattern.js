// pattern
// *****
// ****
// ***
// **
// *

let res = "";
for (let i = 1; i <= 5; i++) {
  for (let j = i; j <= 5; j++) {
    res = res + "*";
  }
  res = res + "\n";
}
console.log(res);

// pattern
// 12345
// 2345
// 345
// 45
// 5

res = "";
for (let i = 1; i <= 5; i++) {
  for (let j = i; j <= 5; j++) {
    res = res + j;
  }
  res = res + "\n";
}
console.log(res);

// pattern
// *
// **
// ***
// ****
// *****
res = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    res = res + "*";
  }
  res = res + "\n";
}
console.log(res);

// pattern
// user input => n = 10

// 1 2 3 4 5 6 7 8 9 10
// 9 8 7 6 5 4 3 2
// 3 4 5 6 7 8
// 7 6 5 4
// 5 6
let n = 10;
for (let i = 1; i <= n / 2; i++) {
  if (i % 2 != 0) {
    for (let j = i; j <= n - i + 1; j++) {
      res = res + j;
    }
  } else {
    for (let k = n - i + 1; k >= i; k--) {
      res = res + k;
    }
  }
  res = res + "\n";
}
console.log(res);

// pattern
// 1
// 12
// 123
// 1234
// 12345

res = "";

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    res = res +j;
  }
  res = res +"\n";
}
console.log(res);






// pattern

// 111
// *
// 333
// *
// 555

// by 1 loop
n=5
res = "";
for(let i =1; i<=5; i++){
    if(i%2!=0){
        res =  res + i +i +i;
        res = res + "\n";
    }
    else{
        res= res + "*"
        res =res + "\n"
    }
}
console.log(res);


// 111
// *
// 333
// *
// 555


  n=5

for(let i =1; i<=5; i++){
    if(i%2!=0){
          console.log(`${i}${i}${i} `)
    }
    else{
     console.log("*");
    }
}



// 111
// *
// 333
// *
// 555

// by 2 loop
res = "";
for(let i =1; i<=5;i++){
  if (i%2!=0){
  for(let j = i; j <=i+2;j++){
    res = res + i;
  }
}else{
  res = res + "*";
}
res = res +"\n";
}

console.log(res);





// pattern

// ####
// 2
// ####
// 4
// ####
// 6
// ####

for(let i =1; i<=7; i++){
  if (i%2!=0){
    console.log("####");
  }
  else{
    console.log(i);
  }
}


// by 2 loop

// ####
// 2
// ####
// 4
// ####
// 6
// ####
res ="";
for(let i =1 ; i<=7; i++){
  if(i%2!=0){
  for(let j = i ; j<=i +3; j++){
    res = res + "#";
   }
  }else {
    res = res + i;
  

}
res = res +"\n";

}
console.log(res);


// pattern
// 1111
// *
// 3333
// *
// 5555
// *

for(let i =1; i<=6;i++){
  if(i%2 != 0){
    console.log(`${i}${i}${i}${i}`)
  }else{
    console.log("*");

  }
}


// pattern
// 1111
// *
// 3333
// *
// 5555
// *

// by 2 loop
res= "";
for(let i=1; i<=6; i++){
  if(i%2!=0){
for(let j =i;j<=i+3;j++ ){
  res = res + i;
}
  }else{
    res =  res + "*";
  }
  res = res +"\n";
}
console.log(res);



// pattern

// 1111
// 2
// 3333
// 4
// 5555
// 6
// 7777

for(let i =1; i<=7; i++){
  if(i%2!=0){
    console.log(`${i}${i}${i}${i}`);

  }else{
    console.log(i);
  }


}




// pattern

// 1111
// 2
// 3333
// 4
// 5555
// 6
// 7777
res = "";

for(let i =1;i <=7; i++){
  if(i%2!=0){
    for (let j =i; j<=i+3;j++){
      res = res +i;
    }
  }else{
    res = res + i;
  }
  res = res +"\n";
}

console.log(res);




// pattern
// 1
// 12
// 123
// 1234
// 12345

for(let i =1; i<=5; i++){
  for(let j =1; j<=i; j++){
    res = res + j;

  }
  res = res + "\n";
}
console.log(res);


// pattern
// 12345
// 1234
// 123
// 12
// 1

n =5;
res = "";
for(let i =1; i<=n; i++){
  for(let j =1; j<=n-i+1; j++){
    res = res+j;
  }
  res = res +"\n";
}
console.log(res);




// pattern

// 123456789
// 8765432
// 34567
// 654
// 5

// how to give spaces => 12345
                          432
                           3
n =9;
for(let i=1; i<=(n+1)/2;i++){
  if(i%2!=0){
    for(let j= i;j<=n-i+1;j++){
      res = res + j;
    }
  }else{
    for(let k =n-i+1; k>=i;k--){
      res = res+k;

    }
  }
   res =res + "\n";
}
console.log(res);






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




// pattern 
n = 5 
// star will be 9 in 1st row

// *********
// *******
// *****
// ***
// * 
 res = "";
for(let i =1; i<=n;i++){
  
  for(let j =i; j<=n*2-i; j++){
    res = res +"*";
    
  }
  res = res +"\n";

}
console.log(res);