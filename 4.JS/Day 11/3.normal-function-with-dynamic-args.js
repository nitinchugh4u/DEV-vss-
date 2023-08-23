//  rest operator

 function addNumbers(...anything){
console.log("anything:",anything);

//     console.log("arguments:",arguments);
//  let sum =0; 
//  for(let i = 0; i<arguments.length; i++){
//  sum = sum + arguments[i];
// }
//  return sum;
}
console.log(
    addNumbers("Ali", "Nitin", 10, true, "MH", { name: "Gunjan" }, [1, 2, 3, 4])
  );
console.log(addNumbers(10,20));
console.log(addNumbers(10, 20, 10));
console.log(addNumbers(10, 20, 10, 1));
console.log(addNumbers(10, 20, 20, 90, 80));
console.log(addNumbers(10, 20, 20, 90, 80, 90, 70));


