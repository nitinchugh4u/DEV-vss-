const nums = [1, 2, -1, 3, 1, 6, 3, 7, -9, -1];
// return only 1st pair thet is equal to 7 and if we get the 1st pair then stop and after traverse
// we not get any pair then return -1;

/**
 * @description Method to find two sum pair
 * @param {Numer[]} arr
 * @param {Numer} k
 * @returns {Number[]}
 */


// / algo
// 1.take the input from the User.
// 2.store the input
// 3. now add first element with all the element except itself and if we get the sum equal to 7
// then we have to return the array which contain that two number.
// 4. if after traversing whole the array one by one if we will not get the sum equal to 7 then
// we have to retur -1
const findTwoElementPair = (arr, k) => {
  // Write code here
  let resArr = [];
  let index =0;
  for(let i =0; i<arr.length; i++){
    for(let j =i+1; j<arr.length; j++){
        if(arr[i]+arr[j]===k){
            resArr[index]= arr[i];
            resArr[index+1] = arr[j];
            return resArr;
        }
    }
    return -1;

  }

};

console.log(findTwoElementPair(nums, 7));
// console.log(findTwoElementPair(nums, 100));








// by using object



const findTwoElementPairs = (arr, k) => {
    // Write code here
    let resArr = [];
    let obj={};
    for(let i =0; i<arr.length; i++){
      for(let j =i+1; j<arr.length; j++){
          if(arr[i]+arr[j]===k){
              let key1 =arr[i];
              let key2 =arr[j];
              obj[key1]=1;
              obj[key2]=1;
              return obj;
          }
      }
      return -1;
  
    }
  
  };
  
  console.log(findTwoElementPairs(nums, 7));



