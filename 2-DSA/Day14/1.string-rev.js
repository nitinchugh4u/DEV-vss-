// string revere

input = "ankit"
output = "tikan"

// algo
// 1.take the input  from tthe User
// 2.store the input
// 3. convert the string in to array
// 4.traverse the reverse loop 
// 5create a variable 
// 6. put empty string in  variable
// 7. return the string outside the loop

let str = "ankit"
function revStr(str){
let arr = str.split("");
let res = "";
for(let i = arr.length-1; i>=0;i--){
    res = res + arr[i];

}
return res;

}
console.log(revStr(str));





