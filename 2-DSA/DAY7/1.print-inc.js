// user pass n
// task = print from 1 to n
// user will pass only number

// cases
// user can pass the value  of n below 1 also

// algo
// step1  take input from the user and store the input
// step 2 check the input is valid or not
// step3 if n<1 throw an error
// step4 if n>=1 print number from 1 to n
// it can alsso work if we pass only number inside the string

// 1.
function printInc(n) {
    if (n < 1) {
        console.log("please enter the valid input");
    } else {
        for (let i = 1; i <= n; i++) {
            console.log(i);
        }
    }
}
printInc("hello");

// now lets upgrade this code
//// user pass n
// task = print from 1 to n if n is a numer or a number in a  string
// user can  pass anything

// cases
// step1 - user can pass  undefine value
// step2 - user can pass null value
// step3 -user can pass string like "hello"
// step4 - uer can pass empty string ""
// step5 - user can pass"20"
// step6 - user can normal number also 20
// step 7 - if value is greter than than print else not print

// // algo
// step1 - Take input from the user
// step2 - Store the input
// step3 - check input is valid or not(check for undefin and null case) if not valid throw an error
// step4 - check for valid string  or not
// if valid string then check for n > 1 if true then print else thow error mesage
// step - 5 - check for number(if n > 1 then print from 1to n else please enter the valid input)

function printIncreasing(n) {
    if (n == undefined || n == null) {
        console.log("please enter the vaid input");
    } else if (typeof n == "string") {
        if (isNaN(parseFloat(n))){

        console.log("please enter the valid string");
        } else {
            if (n < 1) {
                console.log("pease ener the valid number in string");
            } else {
                for (let i = 1; i <= n; i++) {
                    console.log(i);
                }
            }
        }
      } else if(typeof n =="number"){
        if(n<1){
            console.log("please enter the valid number")

        }
        else{
             for(let i =1; i<=n; i++){
                console.log(i);
             }
        }

    }
}

printIncreasing("0");
printIncreasing();
printIncreasing();
printIncreasing();
printIncreasing();
printIncreasing();

// print increasing 2nd approach

function printInc(n) {
    if (n == undefined || n == null) {
        console.log("please enter some input");
    } else if (typeof n == "string" || typeof n =="number") {
        if (Number(n) >= 1) {
            for (let i = 1; i <= n; i++) {
                console.log(i);
            }
        } else if (Number(n) < 1) {
            console.log("please enter the valid number");
        } else {
            console.log("please enter the valid string");
        }
    }
}
printInc("");



// "hello" -> it is showing wrong output
function printInc(n) {
    if (n == undefined || n == null) {
        console.log("please enter some input");
    } else if (typeof n == "string" || typeof n =="number") {
        if(typeof (n/2) === typeof(NaN)){
            console.log("please enter the valid string")
        }
        else if(n>=1){
            for(let i =1;i <=n; i++ ){
                console.log(i);
            }
        }
        else{
            console.log("please enter the valid input number")
        }
       
    }
}
printInc("hello");









// print increasing 3rd approach
function printInc(n) {
    if (n == undefined || n == null) {
        console.log("please enter some input");
    } else if (typeof n == "string" || typeof n =="number") {
        if (n >= 1) {
            for (let i = 1; i <= n; i++) {
                console.log(i);
            }
        } else if (n < 1) {
            console.log("please enter the valid number");
        } else {
            console.log("please enter the valid string");
        }
    }
}
printInc("hello");



