var a = 10; //Global Scope
let c = 20; // Script Scope
const d = true; // Script Scope


// Block scope

for(let i =0; i<=3; i++){
    console.log({i});
}
// console.log(i);


// global scope

for(var j =0; j<=3; j++){
    console.log({j});
}

console.log("out",{j});





const city = "pune";
const  state = "mh";
const phone = "9999"

console.log("normal", phone, city, state);
console.log("Advance", {city,state,phone})



