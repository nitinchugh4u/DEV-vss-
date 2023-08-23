const arr = [1, 2, 3, 4, 5, 6, 7, 7];

/**
 * 0 + 1 -> 1
 * 1 + 2 -> 3
 * 3 + 3 -> 6
 * 6 + 4 -> 10
 * 10 + 5 -> 15
 * 15 + 6 -> 21
 * 21 + 7 -> 28
 * 28 + 7 -> 35
 */


// Old Way

let sum = 0;
for(let item of arr){
    sum  = sum + item;
}

console.log({sum});


// new Way 



const result = arr.reduce((previousVal, currentVal, index, arrElem) => {
    console.log({previousVal, currentVal, index, arrElem});
    previousVal  = previousVal +currentVal;  // 0+1 -> 1
    return previousVal;
},0);

console.log(result);



const result2 = arr.reduce((previousVal,currentVal,index, arrElem)=>{
    previousVal = previousVal +currentVal;  //0+1;
    return previousVal;

})
console.log(result2);


const result3 = arr.reduce(
(previousVal,currentVal,index,arrElem) =>(previousVal = previousVal +currentVal)
)


console.log(result3);

