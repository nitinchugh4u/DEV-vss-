// inputt  -> number
// print from 1 to num;
// create a function
//  input  enter any no. 
// output print from 1 to number

function print(number){
    if(typeof number !== "number" && typeof number !=="string"){
        return "please enter some valid input"
    }
    else{
        if(isNaN(number/2)){
           return "please enter only number in string"
        }else{
            for(let i =1; i<=number; i++){
            console.log(i);
    }
}
}

}

// (print(20));
console.log(print("hello"))
// console.log(print("5"))
// console.log(print(null));
// print(undefined)




// / 1. user can input - only Number
// 2. user can input - empty input (handle by giving input inside the function)
// 3.user can enter string also
// 4. "20"  - number in string  then we also have to print number
// 5. "hello" - throw an error
// 6. empty string also
// 7. null - throw an error
// 8. user can enter message also then like hey hello


