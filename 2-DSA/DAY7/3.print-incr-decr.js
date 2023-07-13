// function
// print increasing and decreasing

// normal function of increasing and decraesing in the same function


function incDec(n) {
    if (n < 1) {
        console.log("please enter a valid number")
    }
    else {
        for (let i = 1; i <= n; i++) {
            console.log(i);

        }
        for (let i = n; i >= 1; i--) {
            console.log(i);

        }
    }
}
incDec(0)




// input (n,+) -> 1 to n print  (n>=1)
// input (n,-)-> n to 1 print (n>=1)
// if n < 1 throw an error Message


// cases
// 1. user can pass umdefined and null
// 2. user can pass number also 
// 3. user can pass string also and number in string also

//  algo
//  1.Take input from the user
//  2.if user pass nothing then show  pease enter some input
//  3.if user pass something then check its type 
//  4.then convert the datatype 
//  5. if it is  greter then 1 then check for its operator also 
//  6. if operator is +  then use incremnet loop if it it is  - then  use dec loop
//  7. if it is a normal string throw an eror

function PrintIncDec(n, opertor) {
    if (n == undefined || n == null) {
        console.log("please enter some input");
    } else if (typeof n == "string" && typeof opertor == "string" || typeof n == "number" && typeof opertor == "string") {
        if (Number(n) >= 1) {
            if (opertor == "+") {
                for (let i = 1; i <= n; i++) {
                    console.log(i);
                }
            } else {
                for (let i = n; i >= 1; i--) {
                    console.log(i);
                }
            }

        } else if (Number(n) < 1) {
            console.log("please enter valid number");
        } else {
            console.log("please enter valid string");
        }



    }
}


PrintIncDec("hello", "-");