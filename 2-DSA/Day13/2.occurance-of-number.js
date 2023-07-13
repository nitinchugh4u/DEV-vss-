//  find the occuranc of every number

// let arr = [1,2,2,2,3,3,4,4,5,5,6,6,6,7,7,7,8,8,8,9,9]
// return the object which store the occurance of every number

// algo

// 1.take the input from the User
// 2.Store the input
// 3.craete a varaible for count if element match
// 4.iterate and check first element with all the next elemnet and so on
// 5. if match  thenn count ++ in the inside loop. and delete that element 
// 6. j-- is used  cuz on deleting the elment the next index elemnet will move one index back so to handlle 
// 6.print arr[i]"is"count; 
// 6.and count  will start from zero for the next element
let arr = [1,2,2,2,3,3,4,4,5,5,6,6,6,7,7,7,8,8,8,9,9]
let ans;
// for console
function eachNo(arr){
    
    for(let i =0;i<arr.length; i++){
        let count =1;
        for(let j =i+1; j<arr.length; j++){
            if(arr[i]==arr[j]){
                arr.splice(j,1)
                count = count +1;
                j--;
            }
           
        }
        
        console.log(arr[i]+ " element is " +count + " times")
        

    }
    return ans
}eachNo(arr);







// 2nd approach 
// array return
let array = [1,2,2,2,3,3,4,4,5,5,6,6,6,7,7,7,8,8,8,9,9]
function eachNoo(arr){
let res =[];    
    for(let i =0;i<arr.length; i++){
        let count =1;
        for(let j =i+1; j<arr.length; j++){
            if(arr[i]==arr[j]){
                arr.splice(j,1)
                count = count +1;
                j--;
            }
            res[i] = count;
        }
        
    
        
        // console.log(arr[i]+ " element is " +count + " times")
        

    }
    return res
}
console.log(eachNoo(array));
