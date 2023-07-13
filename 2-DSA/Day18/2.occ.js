

function occurenceCount(arr){
    const obj = {};
    for(let i =0; i<arr.length; i++){
       let key = arr[i];
       if(obj.hasOwnProperty(key)){
        obj[key] = obj[key] + 1;
       }else{
        obj[key] = 1       //1:1
       }
        
    }
    return obj;

}

console.log(occurenceCount([1, 2, 3, 4, 1, 3, 4, 6, 1, 5]));
