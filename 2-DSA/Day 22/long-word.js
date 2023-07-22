// To find longest word from a string
// My name is ankit jain & i'm from morena

// algo
// 1. take the Input
// 2. store the input
// 3. now convert the string in an array
// 4. now one by one check the length of every word of indexes and comparfe wwith max
// 5. then return the max length word
str = "My name is ankit jain & i'm from morena";

function largest(str) {
  let max = 0;
  let arr = str.split(" ");
  let largest;
  let str1;
  // console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    str1 = arr[i];
    if (str1.length > max) {
      largest = str1;
    }
  }
  return largest;
}
console.log(largest(str));
