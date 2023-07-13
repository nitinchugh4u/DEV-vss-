// function that add only negative  number addition

// algo
// step1. take the input from the user
// step2. store the input
// step3. create a variable
// step4. iterate over the array and if arr[i]<0 then update the variable  
// step5.  return the res variable outside the loop
let arr = [1,-1,-3,-4,-7,8,0,9,5,-10]
function sumNegative(){
    let res = 0;
 for(let i =0; i<arr.length;i++){
    if(arr[i]<0){
        res = res + arr[i]
    }
 }
 return res;


}
console.log(sumNegative(arr));