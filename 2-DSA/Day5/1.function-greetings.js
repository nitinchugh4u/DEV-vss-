// input - getGreetings()
// output - Hello User, Welcome to the team.
// input - getGreetings("chIraG")
// output - Hello Chirag, Welcome to the team.
// input null - invalid input
// input number - invalid input



// take input from the user
// check if its not a valid input
// if user passes the string
// convert the string (first letter large and remainig letter small)
// concate the string
// return sthe message


// think input
// It can be
// String,empty String,number, null, will not pass anything



function getGreeting(name = "uSeR"){
    // step1
    if (name == null || typeof name!== "string"){
        return "please enter a valid string";
    } 
    // step-2
    const formattedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    return `Hello ${formattedName} ,welcoome to the team`;
// return "hello " + name  ",welcome to the team";

}

console.log(getGreeting("null"));


// doubt
// if "null pass with == "
// if user enter empty string

let x = "20";
console.log(x);












// input - naNdinI
// output - Nandini
// input will be string

// algo
// 1.Take input from the User
// 2.Store the input
// 3 convert the first index in to large
// 4 remaining length small
// concat the res string
// return the string



// Cases
// 1.only for string input
// 2.now add empty string case haandle
// 3.if user not enter anything then use the function input
// 4.if user add number and null

// 5.if user enter the the message without double code

function convert(name="user"){
   
    
    // let res = name[0].toUppercase() + name.slice(1).toLowerCase();
    if (name === ""){
    return "Please dont send empty strrig";
    }
    if(name === null || typeof name!=="string"){
    return "please enter a valid input"
    }
    
    let res1 = name[0].toUpperCase();
    console.log(res1);
    let res2 = name.slice(1).toLowerCase();
    console.log(res2);
    console.log(typeof res1);
    console.log(typeof res2);

    let res = res1 + res2;
    return "hello " + res +" welcome to the team"
    return `hello ${res} welcome to the team`
    console.log(res);
    console.log(typeof res);


    // const formattedName = name[0].toUpperCase() + name.slice(1).toLowerCase();

} 
console.log(convert());









