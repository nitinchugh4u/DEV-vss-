// array operator

// 1 get
// put
// post
// delete

const arr = [
    "Apple iPhone 14 Pro Max",
    "Apple AirPod Pro 2",
    "Apple iWatch Series 7 Pro",
    "Apple 1900 cleaner",
    "Apple Developer Account $99",
  ];
//   GET
for(let i =0; i<arr.length; i++){
    console.log("i:", i,arr[i]);
}
console.log(arr);

// put
arr[0] = 20;
console.log(arr);


// post
//  to push the elemnt from the end
arr.push(6);
console.log(arr);

// delete
// remove an element from the array
arr.splice(1,2);
console.log(arr);