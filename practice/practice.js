// // input 
// // NItin -> Nitin
// function add(x){
// if(x== "hello" ) {
//     console.log("30");
// }   

// }
// console.log(add(hello));
// equla operator practice  AND dOUBLE  EQUALS


//  let  a = "10";
// console.log(a);

let a = 10;
console.log(a);
 a = 30;
console.log(a);
console.log(typeof a);
a = "20";
console.log(a);
console.log(typeof a);
a = null;
console.log(a);
a = 20;
console.log(a);
a = 30;
console.log(a);
 a= 3.5;
 console.log(a);
 a = "20.7";
 console.log(a);
 a = "hey dear how are you";
 console.log(a);
 console.log(typeof a);
a = "strinng";
console.log(a);
a = true ;
console.log(a);
a = false;
console.log(a);
a = null;
console.log(a);
a = undefined;
console.log(a);
a = "rahul"
console.log(a);






let x = null;
let y = "30";
console.log(x+y);
console.log(typeof(x+y));
x = undefined;
console.log(x);




function add(x ="20"){
    console.log(x);
    console.log(typeof x);
    return x;
    


}
  let p = (add() );
  console.log(p);
  console.log(typeof a);



function adds(x){
    console.log(typeof(x));
    if(typeof x!= null){
        console.log(x);
    }
    else{
        console.log(x+x);
    }

}


adds(null);



let r = null;
console.log(r);
console.log(typeof r);
let s = undefined;
console.log(s);
console.log(typeof s);




let arr = [1,2,3]

function sub(arr){
    let sum =arr[0];
    for(let i=1; i<=arr.length;i++){
        sum = sum - arr[i];

    }
    

}
sub(arr)





const arr = [1, 2, -7, -8];

/**
 * @description {Method to sum all array numbers}
 * @param {Number[]} input
 *
 * Step 1   - Create a substraction variable with 0
 * Step 2   - Iterate the array & add every element with sum variable
 * Step 3   - Return the sum
 */
const arrNegativeSubtract = (romeshKaArray) => {
  let sum = null;

  for (let i = 0; i < romeshKaArray.length; i++) {
   	sum = sum === null ? romeshKaArray[i] : sum - romeshKaArray[i];
  }

  return sum;
};

console.log(arrNegativeSubtract(arr));








const arr = [1, 2, -7, -8];

/**
 * @description {Method to sum all array numbers}
 * @param {Number[]} input
 *
 * Step 1   - Create a substraction variable with 0
 * Step 2   - Iterate the array & add every element with sum variable
 * Step 3   - Return the sum
 */
const arrNegativeSubtract = (romeshKaArray) => {
  let sum = null;

  for (let i = 0; i < romeshKaArray.length; i++) {
    if (sum === null) {
      sum = romeshKaArray[i];
    } else {
      sum = sum - romeshKaArray[i];
    }
    //sum = sum === null ? romeshKaArray[i] : sum - romeshKaArray[i];
  }

  return sum;
};

console.log(arrNegativeSubtract(arr));





let diff = 0;
        for(let i=0;i<input.length;i++){
            if(input[i]<0){
                diff += (input[i]);
            }
        }
        return diff;




        if(arr[i]<0){
            if(sum ===0){
            sum =arr[i]
            }else{
            sum - =arr[i]
            }
            }

 
            if(arr[i]<0){
                if(sum ===0){
                sum =arr[i]
                }else{
                sum - =arr[i]
                }
                }





                let diff = 0;
        for(let i=0;i<arr.length;i++){
            if(arr[i]<0 && sum===0){
diff=arr[i];
           
          }
diff += (arr[i]);
        }
        return diff;






        sum=0
1,2,-7,-7
11
-7--7
0







 



