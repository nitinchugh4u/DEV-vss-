// function find (n){
//     let ans = "1";
//     for(let i=1;i<=n; i++){
//         if(n==1){
//             return n;
//         }
        
        

        

//     }

// }
// console.log(find("2"))


function countAndSay(str){
    if(str==="1"){
        return str;
    }
    let arr = str.split("");
    console.log(arr);
    let count =1;
    let res=1;
    let res2="";;
    for(let i =0; i<arr.length; i++){
        if(arr[i]==arr[i+1]){
            count = count+1;
            res =  count ;
             
        }else{

            if(i==arr.length-1 & arr[arr.length-1]!==arr[arr.length-2]){
                console.log("yo",res2);
                res1 =1;
                res2 = res2 +res1+arr[i];
                console.log("res2",res2);
            }
            
            else{
                count =1;
            res1 = res;
            // res = 0;
            res2 = res2 +res1+arr[i];
            console.log("hey",res2,i);
            // res =0;
            // if(i==arr.length-1){
                // res =1;
            // }
            }
            
        }
    }
    return res2;
    

}

console.log(countAndSay("1113213211"));