// given array
// we have to return  the sum of each element of an array

//cases
// user can pass only positive value


// algo
// step1 - user will  pass the input and we have to store the input
// step2 -  create a variable outside the loop and asssign it 0
// step3 - iterate over the array and update the variable 
// step4- retuern the  varibale outside the loop 


const arr = [1,2,3,4,5,6,7,8,9];
function sumArr(n){
    let sum = 0;
    for(let i =0; i<n.length;i++){
        sum = sum + n[i];
    }
    return sum;

}

console.log(sumArr(arr));



// cases
// 1. user can pass positive and negative values both
// 2.user can pass empty array also

// algo

// 1.we will check length of an array if array is empty return error messages
// 2.if not empty then iterate over the array and store the  sum of an array elemnet in a variable
// 3.then return the sum  outside the loop
// let array = [];
let array= [1,2,-3,-5,7,9,-1]
function arraySum(array){
    let res =0;
    if(array.length ==0){
        console.log("please enter something inside array");
    }else{
        // let  res = 0;
        for(let i =0; i<array.length; i++){
           res = res + array[i];

        }
return res;
    }
    // return res;
}
console.log(arraySum(array));




