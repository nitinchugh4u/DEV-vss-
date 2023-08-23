// <!-- https://res.cloudinary.com/practicaldev/image/fetch/s--WmYga0PP--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4ty49vslo873hpehxdrw.gif -->
// <!-- https://res.cloudinary.com/practicaldev/image/fetch/s--AC5E-9bo--/c_imagga_scale,f_auto,fl_progressive,h_420,q_66,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/eiz3o1fe8lx4okxtmi27.gif -->




var a = "hey I am var "; //global scope
let b = "hello I am let";  //script Scope
const  c = "hello I am const";
// script scope


function tryMe(){
  let a1 = 10;
  var a2 = 20;
  const a3 = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
tryMe();

// console.log(a1);
// console.log(a2);
// console.log(a3);


// Global scope

for(var j =0; j<=3; j++){
  console.log({j});
}
console.log("Out:",j);


// block scope

for(let i =0 ; i<=3; i++){
console.log({i});
}

// block Scope
{
let c1 = "deepak"
}
// console.log(c1);  



const city ="Delhi";
const state = "new Delhi"
const phone = "9990";


console.log("normal", city, state, phone)
console.log("advance",{city, state, phone})













