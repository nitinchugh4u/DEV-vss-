// find the largest  palindrome from  the given string

// str = "hello madam my name is ankit I'm bob friend"
// output - "madam"
// if not matching  then return -1


// str = "hello madam my name is ankit I'm bob friend"
// let arr =str.split("")
// console.log(arr);


// algo
// 1.take the input string from the User
// 2.  store the input 
// 3. now convert the string in to array so that every word will comme on a diferent index
// 4.iterate the array til array length
// 5 craete  variable which  store the word of each index element of an array one by one
// 6 now traverse the loop on resulatnt variable and check the is it a plindrome
// 7. if it an palindomr then store it in new array and then  check the length of plaindrome
// 8. then return that palindrome which have largest length 

str = "hello madam my name is ankit I'm bob friend"
console.log(str.length);
console.log(str[0]);
console.log(str[5]);
console.log(str[6]);
console.log(str[7]);
console.log(str[31]);
console.log(str[30]);
console.log(str[42]);


let n = "hello"
console.log(n);
    console.log(n.length);
    console.log(typeof n);
    console.log(n[0]);
    console.log(n[2]);

function palnd(n){
    let res = "";
    for(let i =n.length-1; i>=0;i--){
        res = res + n[i];
    }
    if(res===n){
        return "it is an palindrome";
    }else{
        return "it is not a palindrome";
    }
}
console.log(palnd("ankit"));





// let str = "hello madam my name is ankit I'm bob friend"

// 1.we have to return the max length palndrome if exisst.
// 2.if not exist return -1;

// algo
// 1.Take the input from the user
// 2. store the input
// 3. Now convert the string in to array  so that each word of a string will comne on to a seperate
// index of an array.
// 4.now array have store the  word  on every  index
// 5. now traverse the loop on array
// 6.and  inside  store the each word in a variable and then iterate form back over that variblle
// and check it is palindrome 
// 7. if it is an palindrome then store it in to array index
// 8. after traversing the outer loop means if every word will be checked 
// 9. then cheked the length of an  array where we have stored the palindrome if  that array length is
// empty it means we dont get any plaindrome then return -1
// 10. but if we get the length of an array it means it has store the palaindrme

// 11. now we have to trverse the looop over the res array and check the length of each palindromw
// 12. return which have max length

// let str = "hello madam my name is ankit I'm bob friend"
// str = "my name is ankit"
// str = "hello bob my name is ankit I'm madam friend"
// //   str = "nitin bob"
//   str = "bob nitin"

function maxPalindrome(str){
    let arr = str.split(" ");
    // console.log(arr);
    let resArr =[];
    let k = 0;
    let maxlength =0;
    let finalPalindrome;
    // console.log(resArr.length);
    
    
    for(let i =0; i<arr.length; i++){
        let word = arr[i];
        let res = "";

        for(let j=word.length-1; j>=0; j--){
            res =res +word[j];
        }
        if(res===word){
            resArr[k]=word;
            k=k+1;
        }

    }
    if(resArr.length==0){
        return -1;
    }
    
    
    for(let i =0; i<resArr.length;i++){
        if(resArr[i].length>maxlength){
            maxlength = resArr[i].length;
            finalPalindrome = resArr[i];
        }

    }
    return finalPalindrome;

}
console.log(maxPalindrome(str));











// // another approach by function calling for finding palindrome

// str = "hello madam my name is ankit I'm bob friend"

// Algo
// 1. create a function and take the string in input from the User.
// 2. store the string  
// 3.now convert the string in array so that each word come on a different index.
// 4.now treravrse tge loop over the array  and pass each word to a function
// 5. that function  will return the true if it is an palindrome esle return false 
// 6. if its an palindrome then then compare its length with the max length varaile and store in place
// of max.
// 7.then return that  palindrome after itertaing over the loop
// 8.outside the loop if the max has store the 0  the return  -1;

str = "hello madam my name is ankit I'm bob friend"
str = "hello bob my name is ankit I'm madam friend"
  str = "nitin bob"
  str = "bob nitin"
str ="hello"
function paln(arr){
    let res="";
    for(let i = arr.length-1; i>=0;i--){
        res = res+ arr[i];
    }
    if(res==arr){
        return true;
    }
    else{
        return false;
    }


}
function maxpal(str){
let max =0;
let maxPal;
let arr = str.split(" ");
for(let i =0; i<arr.length; i++){
   if(paln(arr[i]) && arr[i].length>max){
      max = arr[i].length;
      maxPal = arr[i];
    //   console.log(arr[i]);
    }
}
if(max==0){
    return -1
}else{
    return  maxPal;
}
}
console.log(maxpal(str));



// // approah 3
// //  if interview not alowed to use arr.split

// // 1. take the string in input
// // 2.now iterate over the string  and make a   variable ands a create an arraywith zerom length which  store the character of indexs and 
// // and on iterating if we get space at index then we  have to store the res variable at  array index
// // and reiniitilaise the resulatan varibale 
// // 3. after the full  iteration tghe array will store the word 
// // 4.  now iterate over the array and do the same steps



function palnn(arr){
    let res="";
    for(let i = arr.length-1; i>=0;i--){
        res = res+ arr[i];
    }
    if(res==arr){
        return true;
    }
    else{
        return false;
    }


}

 str = "hello madam my name is ankit I'm bob friend"
function maxPalndrm(){
    let res="";
    let j=0;
    let arr =[];
    for(let i =0; i<str.length;i++){
        if(str[i]!=" "){
        res=res+str[i];
        }
        else{
            arr[j]=res;
            j=j+1;
            res="";
        }
    }

    let maxPall;
    let maxx =0;
    console.log(arr);
    for(let i =0; i<arr.length; i++){
        if(palnn(arr[i]) && arr[i].length>maxx){
           maxx = arr[i].length;
           maxPall = arr[i];
         //   console.log(arr[i]);
         }
     }
     if(maxx==0){
         return -1
     }else{
         return  maxPall;
     }
     }
     
console.log(maxPalndrm(str));










//  approach without convert the string in to array

//1.take the string in input
//2. now stoe the string
//3. now iterate over the string and if we get the space then index-- and check the word before
// space is an palindromme or not by two index approach and if it is an palindrome then we have 
//  to store the only palindrome word in an array and then check  the max lemngth palindrome inside
// that arry 


str = "hello madam my name is ankit I'm bob friend"

// function maxPalnndoom(str){
//     let j =0;
//     let breakNotExecute = true; 
//     let arr =[]
//     let index =0;
//     for(let i=0; i<str.length; i++){
//         // count=i;//
//         if(str[i]==" "){
//             count=i;
//             i=i-1;
            
            
//         }
//             for(let k =j; k<(i-j+1)/2;){
//                 if(str[k]==str[i]){
//                     k++;
//                     i--;
//                 }else{
//                     breakNotExecute =false;
//                     break;
//                 }

//             }
//             if(breakNotExecute){
//                 arr[index] = 
//             }

//         }


//     }
    

//   ]
// maxPalnndoom(str);








// function biggest polaindrom

// now we dont convert the string in to array we will directly work on string itself 



// algo

// 1.Iterate over the string.
// 2. and we have to store the character that are present on indexes in a res varibale  and on iterating
//  if we get the space 
// then we have to check the res variable  and iterate a reverse loop on res variable to check is it
// palindrome or Note.
// 3. if it is a palindrome then store it in to new array  and if it is not a plaindrome then we have
// to do nothing.and will do a varibale empty in both cases
//   so that we can work for the new word.
//   4.now outside the loop we have to first check the length of an array if it is zero it means
//   we not get the any palindrome on iterating  but if the length is greater then zero thenwe have 
//   to check  for the max length palindrome by iteratng over the array and then we have return the
//   max length plaindrome



//   str = "hello madam my name is ankit I'm bob friend"
//   str = "hello bob my name is ankit I'm madam friend"
//   str = "nitin bob hello"
//   str = "nitin bob "
//   str = "nitin bob"  //(edge condition is used for this case)
//   str = "bob nitin"
  

  function mxPAl(str){
    let res ="";
    let resOpp ="";
    let arr =[];
    let index =0;
    let max =0;
    let largePal;
    // let largeWord =""
    for(let i =0; i<=str.length;i++){
        if(str[i]!=" "){
            res = res+str[i];
            // edge case condition(at the last index we have to check the palndword  and plce in array)
            if(i==str.length-1){
              for(let i=res.length-1; i>=0; i--){
                resOpp = resOpp +res[i];
              }if(res== resOpp){
              arr[index]=res;
            }
          }


        }
        // else if()
        else{
            for(let i=res.length-1; i>=0; i--){
                resOpp = resOpp +res[i];
            }
            // console.log(resOpp);
            if(res===resOpp){ //&& res.length>largeWord.length//){
                arr[index]=res;
                index = index +1;
                res=""
                // largeWord = res;
                resOpp ="";
            }else{
                res=""
                resOpp ="";
              }
        }

    }
    console.log(arr);
    if(arr.length==0){
        return -1;
    }else{
        for(let i =0; i<arr.length;i++){
            if(arr[i].length>max){
                max = arr[i].length;
                largePal = arr[i]
            }

        }
        return largePal;
    }
}
  console.log(mxPAl(str));









  // max palandrome withour storig in an array using an variable only

  str = "hello madam my name is ankit I'm bob friend"
    str = "hello bob my name is ankit I'm madam friend"
    str = "nitin bob hello"
    str = "nitin bob "
    str = "nitin bob"  //(edge condition is used for this case)
    str = "bob nitin"

  function max(str){
    let res="";
    let resOpp = "";
    let maxLength=0;
    let maxPal;
    
    for(let i =0; i<str.length; i++){
      if(str[i]!=" "){
      res = res + str[i];
      // console.log(res);
    }else{
      for(let i=res.length-1;i>=0;i--){
        resOpp = resOpp + res[i]
        // console.log(resOpp);
      }
      if(res==resOpp){
        if(res.length>maxLength){
          maxLength = res.length;
          // console.log(maxLength)
          maxPal = res;
          res ="";
          resOpp ="";
        }else{

        }
      }
      else{
        res ="";
       resOpp ="";
      }

    }
  }
  // console.log(maxPal);
  
  if(maxLength==0){
    return -1;

  }else{
    return maxPal;
  }
}
  console.log(max(str));






// by using two pointer appraoch for palindrome

  str = "hello madam my name is ankit I'm bob friend"
    str = "hello bob my name is ankit I'm madam friend"
    str = "nitin bob hello"
    str = "nitin bob "
    str = "nitin bob"  //(edge condition is used for this case)
    str = "bob nitin niitiin"
    str = "bob nitin"

  function maxx(str){
    let res="";
    let maxLength=0;
    let maxPal;
    
    // for(let i =0; i<=str.length; i++){
    //   let assume =true;
    //   if(str[i]!=" "){
    //   res = res + str[i];
    for(let i =0; i<=str.length; i++){
      let assume =true;
      if(str[i]!=" "&&i!=str.length){
      res = res + str[i];
      
      
      // if(i==str.length-1){
      //     index1 =0;
      //     index2 =res.length-1
        
      //    for(let i=0;i<res.length/2;i++){
      //     if(res[index1]===res[index2]){
      //       index1 = index1 +1;
      //       index2 =index2 -1;
      //     } else{
      //       assume = false; 
      //       break;
      //     }
      //   }

    }
    else{
      let index1=0;
      let index2 =res.length-1
      for(let i=0;i<res.length/2;i++){
        if(res[index1]===res[index2]){
          index1 = index1 +1;
          index2 =index2 -1;

        }else{
          assume = false; 
          break;
        }

        
        // console.log(resOpp);
      }
      if(assume){
        if(res.length>maxLength){
          maxLength = res.length;
          // console.log(maxLength)
          maxPal = res;
          res ="";
          
        }else{

        }
      }
      else{
        res ="";
       
      }

    }
  }
  // console.log(maxPal);
  
  if(maxLength==0){
    return -1;

  }else{
    return maxPal;
  }
}
  console.log(maxx(str));


  
