//we are calling function a function without even declaered the function  and same for variable also and if we remove variable then  it willl show nort defined
getName();
console.log(x);

var x = 7;
console.log(getName); //it will give us whole function  

function getName(){
    console.log("Javascript");
}

console.log(getName); //it will  also give whole function
