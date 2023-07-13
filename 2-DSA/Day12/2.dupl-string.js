// remove duplicate character from a string
// algo

// 1.take input from the user
// 2.store the input
// 3.convert the string in to array bcuz string is inmutable
// 4.now traverse  the array and compare the first elemnt with all the other element except the comparison element
// 5. if get the same element  on both the index then delete that element

// issue

// but after delelting the element that element  will delete but next element will come in to its place
//  and arr.length will also decrease
// and  that element will not check

// so after deleting the element we have to placed undefined or zero there that there index will not
// change and loop awill remain same
// let str = "niitinns"
function duplicateStr(str){
   let arr = str.split("");
    console.log(arr);
    for(let i = 0; i<arr.length; i++){
        for(let j =i+1; j<arr.length; j++){
            if(arr[i]==arr[j]){
                arr.splice(j,1,0)
            }

        }
    }
    for(let i =0; i<arr.length; i++){
        if(arr[i]!=0){
            console.log(arr[i]);
        }

    }

}
duplicateStr(str);

// 2nd approach

// step1- Take the inpurt form the User
// step2 - store the input
// step3 - iterate over tge arrray and compare i elemnet with all i+1 element and if  they equal
// then we have to delete that i+1 elememt but after deleeting the element that elememt will  delete
// but next element will come in to its position and thatsy that elelment can be miss
// so for this we use the condition thwta if we get the same elelment then we will recheck
// the element from the i+1 index again so that element cant be miss

// best approach
str = "nnnittiinnnns";
function dup(str) {
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        arr.splice(j, 1);
        j = j-1;
        // j=i+1;
      }
    }
}
// console.log(arr);
let res ="";
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    res =res+arr[i];
  }
  return res;
}
console.log(dup(str));





// sachin bhai approach

str = "nnnittiinnnns";
function dupp(str) {
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; ) {
      if (arr[i] == arr[j]) {
        arr.splice(j, 1);
        // j = j-1;
        j=i+1;
      }
      else{
        j++;
      }
    }
}
// console.log(arr);
let res ="";
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    res =res+arr[i];
  }
  return res;
}
console.log(dupp(str));


// remove duplaicate character from a string or  ARRAY

// algo

// 1.Take the input
// 2.traverse the arry
// 3 check first element with all the other elelment  then second element with all amnd so on
// 4.if they match then place undefined there
// 5.now traverse the array and  if value at array index is not undefined then print the value

const arr = ['n','i','i','t','t','i','i','n','n','s']
// gokul approach
for(let i=0; i<arr.length;i++){
    for(let j = i +1;j<arr.length; j++ ){
        if(arr[i]==arr[j]){
            arr[j]= undefined;
        }
    }
}
for(let i =0; i<arr.length; i++){
    if(arr[i]!= undefined){
        console.log(arr[i]);
    }
}
