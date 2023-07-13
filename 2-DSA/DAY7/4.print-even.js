// function
// print even no from 1 to n 
// input -> n
// output -> print even in between 1 to n

// # normal function if user has pass only number


// algo

// 1. take input from the User
// 2. check the number is greater than 1 or equal  to 1 or less than 1
// 3. if less than 1 throw an error  mesaage
// 4. if  number is greater then 1 then use loop from 1 to n 
// 5 if n percntage by 2 will be 0 then print 

function  even(n){

    if (n<1){
        console.log("please enter the valid input");
    }
    else {
        for(let i =1 ; i <=n ; i++){
            if (i%2 == 0 ){
                console.log(i);
            }
        }
    }

}
even(0);



// cases
// 1. user can pass undefined or null
// 2 user can pass  empty string and number in string and normal string aslo
// 3.user can pass  normal number also 


// algo
// take input form  the user 
//  if input is  empty throw an error message
// if  noot empty than check the  n 
// check if it is a string or number  if string then typecast.
// after typecaste if it is  greater than or equal to 1 then  print all evnen from 1 to n
//  else if n is less than 1 then  throw an error message
// else print please enter a valid  string 


function  evenNo(n){
    if (n == undefined || n == null ){
        console.log("please enter some input")
    }else if (typeof n == "string" || typeof n == "number"){
        if(Number(n)>=1){
            for(let i=1 ; i<=n; i++){
                if(i%2==0){
                    console.log(i);
                }

            }
        }else if(Number(n)<1){
            console.log("please enter valid number or string in input");
        }else{
            console.log("please enter the valid string");
        }
    }


}
evenNo("hello");