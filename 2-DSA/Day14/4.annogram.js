// approach 3
// 1.Take the 2 input strings from the user
// 2. store the  string
// 3. first check the length of both the string if its not match then it is not an annogram 
// and if length match then we have to proceed 
// 4. convert  the only 2nd string in to array
// 5. now traverse the loop an and compare each character of 1st string with 2nd character of 2nd array
// one by one
// 6. if character match then store the charcter in a empty string varibale 
// and then delete that character from the array and then break
// 7. now check the length of the resulatnt varible  with the length of the first string if they 
// match then it is an anogram and if length is not equal then it is not an annogram 

// 8. count is used becz if we match the first character of the string and if that first charcter
// is not match with all the array then count will remain 0 
// then we dont need need to check for  other charcters also and form there we can return the function


str1 = "abcd"
str2 = "cabd"
str1 ="nitin";
str2 = "naman";
str1= "abcd"
str2 = "bccd"
str1 = "nitin";
str2 = "nitii";
str1 ="rahul"
str2 = "vikas"


function anogr(str1,str2){
    if(str1.length!=str2.length){
        return "please enter the valid input  as string length of both is not equal"
    }else{
        let arr2 = str2.split("");   
        let res = "";
        for(let i =0;i<str1.length; i++){
            let count =0;
            for(let j =0; j<arr2.length; j++){
                if(str1[i]==arr2[j]){
                    count = count+1;
                    res = res + str1[i];
                    arr2.splice(j,1);
                    break;
                }
                
            }
            if(count==0){
                return "eahc charcter is not matching so it is is not an annogram"
            }
        }
        console.log(res);
            if(res.length==str1.length){
                return "it is an anoogram"
            }else{
             
                return"it is not an annogram"
            }

    }

}
console.log(anogr(str1,str2));


// we can also  place zero if  element match  so that there will be no  need to delete the particular element