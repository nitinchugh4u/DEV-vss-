const names = [ 
    "ankit",
    "chirag",
    "mitesh",
    "mahesh",
    "ankit",
    "sanket",
    "Sanket",
  ];
function countNames(arr){
    let obj ={};
    for(let i =0; i<arr.length;i++){
        let key = arr[i];
         key = key.toLowerCase();
         if(obj.hasOwnProperty(key)){
            obj[key]= obj[key] + 1;
        }else{
            obj[key] =1;
        }
        
        
        }
        return obj;

}





console.log(countNames(names));
// Output -  {"ankit": 2, "chirag": 1, "mitesh": 1, "mahesh": 1, "sanket" : 2}
  