// print all the number from 1 to n which are divisible by 3
// input  n 
// output-> all number form 1 to n which are div by 3

//normal function only for number

// algo

// take input form the user
// if user pass the value less then 1 then thorw an error
// if user pass the value greater than or equal to 1 then  use loop from 1 to n and print all no. which are div by 3

function printDivby3(n){
    if (n<1){
        console.log("please entetr some valid input");
    }else{
        for (let i =1; i<=n; i++){
            if (i%3==0){
                console.log(i);
            }
        }
    } 



}
printDivby3(15);

// cases
// user can pass empty(undefined and null)
// user can pass number in string or string innside string or empty string
// user can pass number

// algo
// check the input if user not enter thrwo an error message
// if user give the input then then check for a strring or numer
// if it is  string  hen typecste it and aftyer typecast if it sis greater than 1 print number that are divisible by 3
// if it is  a less than  1 then throw an error meseage
// if it string but after typecaste  both the above condition is not true  then it means it is  string inside an string
// throw  an error  message


function divBy3(n){
    if(n ==  undefined || n == null ){
        console.log("please enter  some input");
    }else if (typeof n == "string" || typeof n == "number"){
        if(Number(n)>=1){
            for (let i =1; i<=n; i++){
                if(i%3==0){

                    console.log(i);
                }
            }
        }else if(Number(n)<1){
            console.log("please enter valid input in string or number ")
        }else{
            console.log("please enter the valid string");
        }

    }


}
divBy3("hello");



