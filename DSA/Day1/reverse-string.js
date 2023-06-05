// reverse string logic

// algorithem
// step-1 - Define a function
// step-2 -  Get the input and break in to array via split
// step-3 - Iterate the array and store data in to array via split
// step-4 - Return output

function reverse(input);
const splittedStr = input.split("");
let result = "";
for(let i = splittedStr.length-1; i>=0;i--){
    result = result +splittedStr[i];
}

return result;

