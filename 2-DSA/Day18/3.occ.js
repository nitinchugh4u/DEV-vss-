let arr = ["nitin","neha","chirag","sushmita","sanket","yash","yash","ntin","sushmita","ankit","ankit","nitin"];

function occ(arr){
    const obj = {};
    for(let i=0; i<arr.length;i++){
        let key = arr[i];
        if(obj.hasOwnProperty(key)){
            obj[key] = obj[key] + 1;
        }else{
            obj[key]=1;
        }
    }
    return obj

}
console.log(occ(arr));