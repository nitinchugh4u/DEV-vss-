let arr = [1,2,3,4,1,3,4,6,1,5]
// find occurance of every number

// algo
// 1.compare first number with every number except first number then do index +1,
// 2. if equal then count +1  and placed undefined over there so that it will not check again and after
// traversing inside ineer loop placdd the  count at 0 index of an new array and then  increase the index
// 3. if array index value is undefined then  we dont have to compare just do i= i+1;
// 4. after traverwsing the outer array then  return the new array whih have only counts of every number 


// this function will tell only ocuurance of different number but it will not which number comes
// how many times

function occurance(arr){
    let index =0;
    let retArr =[];
    for(let i =0;i<arr.length; i++){
        let count =1;
        for(let j = i+1; j<arr.length; j++){
            if(arr[i]==undefined){
                break;
            }
            else if(arr[i]===arr[j]){
                count = count +1;
                arr[j]= undefined;
            }
        }
        if(arr[i]!=undefined){
        retArr[index]=count;
        index = index+1;
    }

    }
return retArr;
}

console.log(occurance(arr));




// one loop approach pending(two indexes approach)