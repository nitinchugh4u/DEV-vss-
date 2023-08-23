function addNumbers(){
    console.log("arguments:",arguments);
let sum =0; 
for(let i = 0; i<arguments.length; i++){
sum = sum + arguments[i];
}
return sum;
}

console.log(addNumbers(10,20));
console.log(addNumbers(10, 20, 10));
console.log(addNumbers(10, 20, 10, 1));
console.log(addNumbers(10, 20, 20, 90, 80));
console.log(addNumbers(10, 20, 20, 90, 80, 90, 70));



function add(){
    console.log("arguments add :", arguments)
    let sum =0;
    for(let i =0;i<arguments.length; i++){
         sum = sum +arguments[i];
         console.log(arguments[i]);
         console.log(arguments.length);
    }
    return sum;


}

console.log(add(100,200));
