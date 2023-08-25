// algo
// 1.Take the input
// 2.store the input
// 3.condition check => (length should be even)  (first elememt should be open bracket) (last element should be cloesd breacket)
// 4.Every closing should have there open bracket before it.
// 5. so when we get closed bracket then we have to check the length of the open bracket array,and we have to compare the last element also theyu should be equal and opposite pair 


// we will use stack for this

// let str =  "[]({}())"  ; //true case 
 str ="[]";


function find (str){
    let arr = str.split("");
    console.log(arr);
    let stack = []
    for(let i = 0 ; i<arr.length; i++){

        if (arr.length %2!==0  ||   arr[0]=== ")"  &&  arr[0]==="}"  &&  arr[0]==="]" || arr[arr.length-1]==="{" || arr[arr.length-1]==="("  || arr[arr.length-1]=== "{"){
            
            console.log("yooo")
            return false;

        }else{
            if(arr[i]==="("   ||  arr[i]==="{"   ||  arr[i] === "[" ){

                stack.push(arr[i])

            }
            else{
                if(stack.length<1){
                    return false;
                }else{
                    if( (stack[stack.length-1]=== "(" && arr[i]=== ")")  ||   ( stack[stack.length-1] === "[" &&   arr[i]=== "]")  || (stack[stack.length -1]==="{" && arr[i] === "}")) {

                        stack.pop();

                    }else{
                        return false;

                    }
                }
            }
        }

    }

    if(stack.length == 0 ){
        return true;
    }else{
        return false;
     }
}   
        
console.log(find(str));

