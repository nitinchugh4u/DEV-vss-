// print output in  1 line
let result = ""
function  row(n){
    for(let i =1; i<=n; i++){
        result = result + i;
    }
    console.log(result);

}
row(5);

// trim method

let a  =  "     Nitin"
// console.log(a);
console.log(a.trim(a));

function spacedec(n){
    console.log(n.trim())

}
spacedec("        hello")