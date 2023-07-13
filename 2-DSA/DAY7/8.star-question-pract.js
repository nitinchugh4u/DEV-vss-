
for(let i =1; i<=5; i++){
console.log("nitin");
}
let res = "";
for(let i =1; i<=5;i++){
  res = res + "nitin "
}
console.log(res);

 
for(let i=1; i<=5; i++){
console.log(i);
}

res ="  ";
for(let i =1; i<=5; i++){
  res = res + i ;
}
console.log(res);



// pattern 1

// *****
// *****
// *****
// *****
// *****

res= ""
for(let i=1; i<=5; i++){
  res = res + i;
}
res = ""
for(let i =1; i<=25; i++){
  
  res = res + "*";
  if(i==5|| i==10 || i==15 ||i==20){
    res = res + "\n";
  }
  } 

// console.log(res);



// pattern 1

// *****
// *****
// *****
// *****
// *****

for(let i =1; i<=5;i++){
  console.log("*****");
}



// pattern 1

// *****
// *****
// *****
// *****
// *****

// using 2 loop

res = "";
for(let i =1; i<=5; i++){
  for(let j=1; j<=5; j++){
    res = res + "*"
  }
  res= res + "\n";

}
console.log(res);



res = "";
for(let i =1; i<=5; i++){
  for(let j=1; j<=5; j++){
    res = res + "*"
  }
  res= res + "\n";
  // console.log(res);

}
console.log(res);










































// const arr = [
//     "Apple iPhone 14 Pro Max",
//     "Apple AirPod Pro 2",
//     "Apple iWatch Series 7 Pro",
//     "Apple 1900 cleaner",
//     "Apple Developer Account $99",
//   ];
//   // GET
//   for (let i = 0; i < arr.length; i++) {
//     console.log("i: ", i, arr[i]);
//   }
  
//   // POST
  
//   // PUT
  
//   // DELETE

//   const arr = [
//     "Apple iPhone 14 Pro Max",
//     "Apple AirPod Pro 2",
//     "Apple iWatch Series 7 Pro",
//     "Apple 1900 cleaner",
//     "Apple Developer Account $99",
//   ];
//   // GET
//   for (let i = 0; i < arr.length; i++) {
//     console.log("i: ", i, arr[i]);
//   }
  
//   // POST
  
//   // PUT
  
//   // DELETE
  
//   const profiles = [
//     {
//       name: "Rahul",
//       age: 28,
//       city: "bangalore",
//     },
//     {
//       name: "Varun",
//       age: 22,
//       city: "Mumbai",
//     },
//     {
//       name: "Tarun",
//       age: 24,
//       city: "Pune",
//     },
//     {
//       name: "Mitesh",
//       age: 29,
//       city: "Mumbai",
//     },
//   ];
  
//   const filteredArray = [];
  
//   for (let i = 0; i < profiles.length; i++) {
//     if (profiles[i].age >= 28) {
//       filteredArray.push(profiles[i]);
//     }
//   }
  
//   const filteredArrayList = profiles.filter(
//     (meriProfile) => meriProfile.age >= 28
//   );
  
//   console.log(filteredArray);
//   console.log(filteredArrayList);
  