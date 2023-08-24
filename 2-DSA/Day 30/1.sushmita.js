// let s = "()[]{}";
//let s = "(){}}{";
// let s = "({[]})";
let s = "(([]){})";

var isValid = function (s) {
  let strArr = s.split("");
  let n = strArr.length;
  let j = n - 1;
  let i = 0;
  // let flag = 0;
  const obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  if (n % 2 !== 0) return false;
  while (i < j) {
    if (strArr.includes(strArr[i]) && strArr.includes(strArr[j]) == false) {
      console.log(strArr[i], strArr[j]);
      return false; // If characters don't match, return false
    } else if (
      strArr[i + 1] !== obj[strArr[i]] &&
      strArr[j] !== obj[strArr[i]]
    ) {
      console.log("strArr[i + 1] :", strArr[i + 1]);
      console.log("obj[strArr[i]] :", obj[strArr[i]]);
      console.log("strArr[j] :", strArr[j]);
      console.log("obj[strArr[i]] :", obj[strArr[i]]);
      return false;
    } else if (obj[strArr[i]] === undefined) {
      console.log("obj[strArr[i]] :", obj[strArr[i]]);
      return false;
    }
    if (strArr[i + 1] === obj[strArr[i]]) {
      i = i + 2;
    } else if (strArr[j] === obj[strArr[i]]) {
      i++;
      j--;
    }
  }
  return true;
};

console.log(isValid(s));
