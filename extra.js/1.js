// Reverse string logic

// input - rahul 
// output - luhar

// step1 =  make a  function 
// iteraate reverse loop
// create a  variable with empty string outside the loop
// now  string = string  + arr[i]
// outside the loop  return the  variable


function rev(str){
    let res = ""
    for(let i= str.length-1; i>=0; i--){
        res = res + str[i];
    }
    return  res;


}
console.log(rev("rahul"))
// rev("rahul")



