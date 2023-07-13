// loops
// print nitin 10 times
// for (let i =1; i<=10; i++)
// {
//     console.log("nitin");
    // console.log(i);
    
// }
// console.log(i);

//print no 1 to 10;
// for (let i=1; i<=10; i++){
    // console.log(i);
// }

// /print 20 to 30
// for(let i= 20; i<=30; i++){
//     console.log(i);
// }

// 100 to 200
// for (let i =100; i<=200; i++){
    // console.log(i);
// }


// reverse loop
// print from 100 to 1

// for (let i = 100; i>=1; i--){
    // console.log(i);
// }
// or

//  



// function

// user want the same no. in return

// function add(x,y){
//     console.log(typeof x)
//    let a = console.log(x);
//     let b = console.log(y);
//     let c = a+b;
//     console.log(c);
//     console.log(typeof c);
   
//     let sum = x+y;
//     console.log(sum);
//     console.log(typeof (sum))
//     return sum;

// }
// console.log(add());







// function
// input 10
// outpuut 1 to 10

// 
// function print(n=10){
// for(let i =1; i<=n ; i++){
//     console.log(i);

// }
// }
// print(100);


// pprint from user input to 1;

// function print(x){
//     if(x===0){
//         console.log("please enter a valid input"
            
//         )
//     }
//     for (let i = x; i>=1; i-- ){
//         console.log(i);
//     }

// }
// print();







// print from user input to 10;


// function print(n){
//     if(n<10){
//         console.log(n);
//     }
// for(let i=n; i>=10; i--){
//     console.log(i);
// }
// }
// print(9);


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








//  input  enter any no. 
// output print from 1 to number

// algo
// step1- take input from the User
// step2- store the input
// step3- loop start conddition from 1
// step4- loop ending condition as User input 
// step5 - console inside the loop






function print(n){
    for(let i = 1; i<=n; i++){
        console.log(i);
    }

}
print("200")










