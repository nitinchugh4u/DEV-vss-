// String Methods
// Array Methods
  



// input - getGreetings()
// output - Hello User, Welcome to the team.
// input - getGreetings("chIraG")
// output - Hello Chirag, Welcome to the team.
// input null - invalid input
// input number - invalid input


// // Algo
// step-1 check if its not a valid input
// step-2 true ,then enter valid input
// step-3 convert the string in to capital
// step-4  concate the string with te message
// step-5 return the string


// // algo
// step-1 check if it  is not a valid input
// step-2 true, then enter a valid input
// step-3 convert the first letter in to large and reaaming letter as Small
// step-4 concat the string with message
// step-5 return the string





 function getGreetings(name = "user"){
  // step1
   if(name === null || typeof name!=="String"){
    return "please enter a valid string"; 
  }
  else{
    const forrmattedName =  name[0].toUpperCase() + name.slice(1).toLowerCase();
    return `hello ${formattedname},welcome to the teem `;
     //return "Hello " + name + ", welcome to the team";
    
  } 






}
console.log(getGreetings("NItIn"))
console.log(getGreetings(123))
console.log(getGreetings(null))
console.log(getGreetings())






function getGreetings(name = "User") {
  // Step 1
  if (name === null || typeof name !== "string") {
    return "Please enter a valid string"; // Step 2
  } else {
    const formattedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    return `Hello ${formattedName}, welcome to the team`;
    //return "Hello " + name + ", welcome to the team";
  }
}

console.log(getGreetings(null));
console.log(getGreetings("cHiRag"));




// input NiTin output Nitin

const capitaliseCharater = (input) => {
let result = input[0].toUpperCase();
console.log(result);
for (let i =1; i<input.length;i++){
  result = result + input[i].toLowerCase();
}
return result;
}
console.log (capitaliseCharater("yoyo"));




















