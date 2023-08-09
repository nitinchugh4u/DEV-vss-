let arr = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0];
// 0 to left
// 1 to right

//
// 1.loop on array
// 2.take first element and and check it is zero or non zero
// and if it is nonzero then we have to compare that element with all the other element when we get the non zero then we have to swap both the element and and break that loop
// 3.take first element and compare with all the other element
//

// [
  // 0, 0, 1, 1, 0, 0, 0,
  // 1, 1, 1, 1, 0, 0, 0,
  // 1, 1, 1
// ]

arr = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0];
function find(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
          let lastVar = arr[i];
          arr[i] = arr[j];
          arr[j] = lastVar;
          break;
        }
        // break;
      }
    }
  }
  return arr;
}
console.log(find(arr));
