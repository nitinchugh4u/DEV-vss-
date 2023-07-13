//  return odd number addition of an array

// algo
// 1.take the input from the user
// 2.store the input
// 3.create a vraible and assign it to 0;
// 4.iterate over the array and use condition if arr[i]%2!=0 then update the variable
// 5. return  the varibale outside the  loop
let arr =[1,2,3,4,5,7,8,5,4,7,4]
function odd(arr){
let res = 0;
for(let i=0; i<arr.length; i++){
    if(arr[i]%2!=0){
        res = res + arr[i];
    }
}
return res;

}



console.log(odd(arr));