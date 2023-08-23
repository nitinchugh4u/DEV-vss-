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
                nums[j]= nums[i];
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
    