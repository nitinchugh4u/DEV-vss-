// return only even numbers sum in an array

// algo 
// 1.Take input from  the User
// 2. store the input
// 3. create a variable
// 4. iterate over the array and use condition if arr[i]%2==0 then update the variable
// 5. return the varible outside the loop

let arr = [1,2,3,4,5,6]
arr=[-2,-4,-5,-6,-9]

function sumEven(arr){
    let res =0;
    for(let i =0; i<arr.length;i++){
        if(arr[i]%2==0){
            res = res + arr[i];
        }
    }
    return res;

} 
console.log(sumEven(arr));   
