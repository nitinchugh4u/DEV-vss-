const checkPalindrome = (input) => {
    input = input.toLowerCase();
  
    let j = input.length - 1;
  
    for (let i = 0; i < input.length / 2; i++) {
      const currentElement = input[i];
      const lastElement = input[j - i]; // input[j - i] -> input[5-1-0] -> input[4] -> "M"
  
      if (currentElement !== lastElement) {
        return false;
      }
    }
  
    return true;
  };



// check string is an palindrome or not

//algo
// 1. take the input from the User
// 2.store the input
// 3.now reverse that string by traverse end to 0 index  and store in varibale
// 4.now check the input string and the res string
// 5. if they equal then  retrurn "it  is  an  palindrome"  else return "not a palindrome" 

// nitin    
// ankit

function palindrome(str){
  let res = "";
  for(let i = str.length-1;i>=0; i--){
    res = res + str[i];
  }
if(str===res){
  return "it is an palindrome";
}
else{
  return "it is not a palindrome"

}
}

console.log(palindrome("nitin"));



// 2nd approach

// isPalindrome

// algo
// 1.take the input from the user
// 2.Store the input
// 3.iterate the loop till less than str.length/2.
// 4. create two pointer index i,j  i start with (0) index and j start with (str.length-1).
// 5. now check the first index element with last element if equal then i++, and j--.
// 6. if not equal then else return it is not palindrome.
// 7. after the loop  return  it is palindrome becuz loop will run only if elemnet will match till  loop existing condition
// 8. give condition of loop (i<n/2) 
 str = "nitin"
//  str="niittiin"
//  str = "ankit"

function isPalindrome(str){
  let j = str.length-1;
  for(let i =0; i<str.length/2;){
    
    if(str[i]==str[j]){
      i= i+1;
      j= j-1;

    }else{
      return "It is not a Palindrome"
    }

  }
  return "It is an palindrome"

}
console.log(isPalindrome(str));




  