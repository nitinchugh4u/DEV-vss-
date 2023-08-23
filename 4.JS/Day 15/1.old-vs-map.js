const arr = [1,2,3,4,5,6,7] // [1+1,2+1,3+1,4+1,5+1,6+1,7+1]

// Old legacy way
const arrV2 = [];
for(let i =0; i<arr.length; i++){
  arrV2.push(arr[i]+1);  
}
console.log("arrV2:",arrV2);



// Old Legacy way

const  arrV3 = [];

for(let i =0; i<arr.length; i++){
  arrV3.push(arr[i]*2)
}

console.log("arrV3",arrV3);



// old legacy way

let arrV4 = []
for(let i =0; i<arr.length; i++){
  if(arr[i]%2!==0){
    arrV4.push(arr[i]*2);
  }else{
    arrV4.push(arr[i]);
  }
}

console.log("arrV4",arrV4);


// New Way map


// +1;

const arrPlusOne = arr.map((item) => item+1) ;
console.log(arrPlusOne);

const plusOne = arr.map((item)=>{
  console.log("item:", item);
  item = item +1;
  return item;
})
console.log(plusOne);


// *2


const arrMult = arr.map((item)=>item*2)
console.log(arrMult);

const Mult = arr.map((item)=>{
  item = item *2;
  return  item;
})

console.log(Mult);


// *2 if odd


const arrMultiplyTwoIfOdd = arr.map((item)=>{
  if(item%2!==0){

   console.log(item);
    
    return item *2

  }
  console.log(item);
  return item;
})

console.log(arrMultiplyTwoIfOdd)



const newArr = arr.map( ()=> "" );
console.log(newArr);













