function printInc(n) {
  if (n == undefined) {
    console.log("please enter something");
  } else if (typeof n == "string" || typeof n == "number") {
    if (Number(n) > 1) {
      for (let i = 1; i <= n; i++) {
        console.log(i);
      }
    } else if (Number(n) < 2) {
      console.log("enter value greater than 1");
    } else {
      console.log("enter valid string number");
    }
  }
}

printInc("hello");
// printInc("7");
// printInc("");
// printInc();
// printInc("hey");




// function printInc(n){

//     // if ( typeof n == "string" ||  n==""||  n ===null){
//     //   console.log("please enter  the valid"); 
  
//     // }
//     for (let i =1 ;i<=n;i++){
//       console.log(i);
//     }
//     if ( typeof n == "string" ||  n==""||  n ===null){
//         console.log("please enter  the valid"); 
    
//       }
  
//   }

// //   printInc(5);
//   printInc("3");
// //   printInc();
// //   printInc("hey");
// //   printInc(null);
  
// //   printInc("20");
  


// // cases
// // 1. user can input - only Number
// // 2. user can input - empty input (handle by giving input inside the function)
// // 3.user can enter string also
// // 4. "20"  - number in string  then we also have to print number
// // 5. "hello" - throw an error
// // 6. empty string also
// // 7. null - throw an error
// // 8. user can enter message also then like hey hello

// //  doubt- how to handle 5 and 8 condition

// // let a = "hey";
// // console.log(typeof a);
