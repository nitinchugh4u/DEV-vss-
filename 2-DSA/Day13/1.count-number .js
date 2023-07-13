// arr = [1,2,3,4,1,2,3,4,5,6,7,8,1,2]
// we will pass an arrray and numberr to the function and we have to return the count of that number

// algo
// 1.Take input from the User
// 2.Store the input
// 3.create a variable  count which count the occurance of that Number
// 4. iterate over the array 
// 5.compare the store input with each Element and if they  match then we have to  increase the count++
// 6.return the count

let arr =  [1,2,3,4,1,2,3,4,5,6,7,8,1,2]
// let n = 1;
// we are finding the occurance of 1


function count(arr,n){
    if(n==undefined || typeof n !== "number"){
        return "please enter the valid input"
    }
    let count = 0;
    for(let i =0; i<arr.length; i++){
        if(arr[i]==n){
            count = count+1;
        }

    }
    return count;

}

console.log(count(arr,1))


// algo
// 1.Take the input from the User
// 2.Store the input
// 3.traverse the arrray
// 4.create a variable that count the no.of  times the number exist
// 5if number match with the arr index then count will be increse by 1;

arr= [1,2,2,3,3,3,5,5,6,6,7,5,5,5,5,5,4,5,45]
function countNo(arr,n){

    let count = 0;
    for(let i =0; i<arr.length; i++){
        if(arr[i]===n){
           count = count +1;
        }
    }
    return count;
}
console.log(countNo(arr,45));


// // now edge case handle
// user can pass anything

// 1.user can pass array and number but that number will not present in an array then we have to
// return  the count is -1;
// 2.if user pass string then return please enter valod input
// 3. but if user pass number in a a string then it will  except 

// cases-1. if user pass input other then number then throw an error

arr= [1,2,2,3,3,3,5,5,6,6,7,5,5,5,5,5,4,5,45]
function countNoo(arr,n){
    
    // if(typeof n != "number"){
        if(Number(n)!=n){
       return "please enter some valid input";
    }else{
    let count = 0;
    for(let i =0; i<arr.length; i++){
        if(arr[i]==n){
           count = count +1;
        }
    }
    if(count ==0){
        return "this number is not present in an array"
    }
    return count;
   }
}

console.log(countNoo(arr,undefined));
