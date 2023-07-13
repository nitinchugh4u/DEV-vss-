// function
// print decreasing
// input - n;
// print number =  n to 1;
// print only and number in string

//  lets make first normal print decreasing function
// 
 function printDecreasing(n){
    if(n>=1){
      for(let i = n; i>=1; i--){
        console.log(i);
      }
    }
    else{
        console.log("please enter the  valid input");
    }

 }
 printDecreasing(-1);






// 2.print decraesing approach

// cases
// 1. user can enter nothing in Input.
// 2. user can  pass string in number "20" and string "hello"  and empty string ""
// 3. user can pass a number.


//algo
// step1 - Take input from the User
// step2 - checking condition for input
// step3-  if input is empty  throw a message error
// step4 - if user pass the input  then checking condition if it is a string or Number
// step5 - if it is a number or number in a sring then  typecast it First
// step6-  check if number or number in string is greater then 1 or equal to 1 then print from  input nuimber to 1.
// step7- if number or number in string is less than 1then throw an error messsage
// step8 - else condition please enter a valid string



function Decr(n){
    if (n == undefined || n ==  null){
        console.log("please enter some input")
    }else if(typeof n =="string" || typeof n == "number"){
        if(Number(n)>=1){
            for(let i = n ; i>=1;i--){
                console.log(i);
            }
        }else if(Number(n)<1){
            console.log("please enter the valid  number or string in number");
        }else{
            console.log("please enter the valid string");

        }


    }

}

Decr("hello");