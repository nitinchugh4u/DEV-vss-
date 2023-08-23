const arr = [1, 2, 3, 4, 5, 6, 7, 8, 8];

// Legacy way
let filteredArrV1 = [];
for (let item of arr) {
  if (item % 3 === 0 || item % 5 === 0) {
    filteredArrV1.push(item);
  }
}

console.log("FilteredArrV1: ", filteredArrV1);

// ES6 Way
const filteredArrV2 = arr.filter((item) => item % 3 === 0 || item % 5 === 0);

const filteredArrV3 = arr.filter((item) => {
  if (item % 3 === 0 || item % 5 === 0) {
    return true;
  }
  return false;
});

console.log("filteredArrV2: ", filteredArrV2);
console.log("filteredArrV3: ", filteredArrV3);
