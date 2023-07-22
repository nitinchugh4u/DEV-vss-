// Normal sum function
function sum(a, b) {
    return a + b;
  }
  console.log(sum(10,20));
  console.log( "hey ", sum);

  const totalSum = sum(10,20);
  console.log(totalSum);

  
  // Arrow Func 1
  const sumV2 = (a, b) => {
    return a + b;
  };
  console.log(sumV2(20,20));
  let totalSumV2 = (sumV2(30,20));
  console.log(totalSumV2);
  console.log(sumV2);
  console.log("hey",sumV2(20,20));
  
  // Arrow Func 2
  const sumV3 = (a, b) => a + b;
  
 console.log(sumV3(10,10));
const totalSumV3 = sumV3(50,50);
console.log(totalSumV3);




  
  // First way
  fetch("url").then(function (krishna) {
    return krishna.json();
  });
  
  // Arrow way
  fetch("url")
    .then((krishna) => {
      return krishna.json();
    })
    .then((data) => {
      console.log(data);
    });
  
  // Arrow way 2
  fetch("url")
    .then((krishna) => krishna.json())
    .then((data) => console.log(data));
  
  // Arrow way 2
  const apihandler = (krishna) => krishna.json();
  fetch("url").then(apihandler);
  