// let arr = [];
// console.log(arr);
// arr.push(5);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.push(1);
// arr.push(2);
// arr.push(3);
// arr.push(4);
// arr.push(5);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.pop();
// console.log()
// arr.pop();
// console.log(arr);
// arr.pop();
// arr.pop()
// console.log(arr);
// arr.pop();
// console.log(arr);


// let str = "nitin"
// console.log(str);
// console.log(typeof str);

// const res = str.split("")
// console.log(res);
// res.pop()
// console.log(res);
// res.push(10);
// console.log(res);


// 215  Leetcode

function m (nums, k){
    let max = null;
    let count =0;
    for(let i =0; i<nums.length; i++){
        for(let j= i+1; j<nums.length; j++){
            if(nums[i]>nums[j]){
            max = nums[i];
            }else{
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j]= temp;
                max= nums[i]
            }
        }
        count = count + 1;
        if(count == k){
            console.log(nums);
    
           let res = nums[k-1];
            // return res;
        }
    }
        
    };

    m([3,2,1,5,6,4],2);







    // testcase





    
    








