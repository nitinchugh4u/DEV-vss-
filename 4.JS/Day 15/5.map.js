const  nums = [1,2,3,4,5,6,7]

const multipleByTwo = nums.map((currentItem, index, arr) =>{
console.log({currentItem,index,arr})
return currentItem *2;
}) 
console.log(multipleByTwo);



const num= [1,2,3,4,5,6,7];
const multipeofTwo = num.map
((curr) => {
    console.log(curr);
    return curr * 3 ;

})
console.log(num);



const mutipleByTwoV2 = nums.map((currentItem) => currentItem * 2 );

console.log(mutipleByTwoV2);

console.log({nums,multipleByTwo,mutipleByTwoV2});







const p = [
    {
      id: 1,
      name: "John Doe",
      city: "New York",
      state: "New York",
      isActive: "Available",
    },
    {
      id: 2,
      name: "Jane Smith",
      city: "Los Angeles",
      state: "California",
      isActive: "Not Available",
    },
    {
      id: 3,
      name: "Michael Johnson",
      city: "Chicago",
      state: "Illinois",
      isActive: "Available",
    },
    {
      id: 4,
      name: "Emily Brown",
      city: "Houston",
      state: "Texas",
      isActive: "Available",
    },
  ];