// return subtract of an array

// algo
// 1.take the input from the User
// 2.store the input
// 3. craete a variable  andf assign 0;
// 4. iterate over the array
// 5.  use condtion for 1st index we store the value  seperately in a variable
// 6. else  use  another condition (res-arr[i]) form 1 st index  and after iterating over the array 
// 7.return the variable 

let arr =[1,2,3,4,5]
 arr = [-1,-2,-3,-4,-5,-15,-10] 
 arr = [,-2,3,-4]
 arr= [1,2,-7,-8]
function diff(arr){
   let res = 0;
    for(let i =0; i<arr.length; i++){
        if(i==0){
            res = res +arr[0];
            // console.log(res);
        }else{
            res = res - arr[i];
        }
        
    }
return res;
}
console.log(diff(arr));





let array  = [-1,-8-5-4-3];
function subtract (array){
    let res = array[0];
    // console.log(res);
    for(let i =1; i<array.length;i++){
        res = res - array[i];
    }
    return res;

}
console.log(subtract(array));







// subtract the  elemets and return

// algo
// step1. take the input from the User
// step2 store the Input
// step3  create the varibale null
// step 4  iterate over the array and store the  0index elemnnet in place of null using condition
// step5  else iterqate the loop from 1 st index  to end and do res - res[i]








const arrs = [1, 2, -7, -9];
function subtracts(arrs){
    let res =  null;
    for(let i = 0; i<arrs.length; i++){
        if(res==null){
            res = arrs[i];
        }else{
            res= res-arrs[i];
        }
    }
    return res;

}
console.log(subtracts(arrs));



