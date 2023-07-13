// function that return only addition of positive number of an array


// algo
// 1.take the Input from the user
// 2.store the Input
// 3.create a variable
// 4.iterate over the array and  if arr[i]>=0 then update the res 
// 4.return the res outside the loop


let arr = [-1,-2,-4,5,6,7,8,-3,2];
function addPositive(arr){
    let res =0;
    for(let i =0; i<arr.length; i++){
        if(arr[i]>=0){
            res = res + arr[i];
        }
    }
    return res;

}
console.log(addPositive(arr));