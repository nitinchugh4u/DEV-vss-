const profiles = [
    {
      name: "Rahul",
      age: 28,
      city: "bangalore",
    },
    {
      name: "Varun",
      age: 22,
      city: "Mumbai",
    },
    {
      name: "Tarun",
      age: 24,
      city: "Pune",
    },
    {
      name: "Mitesh",
      age: 29,
      city: "Mumbai",
    },
  ];

//   legacy way

for(let i =0; i<profiles.length;i++){
    profiles[i].pincode = 1100433;
}
console.log(profiles);


// new way

const newResult = profiles.map((item)=>{
    item.pincode =1100434;
    return item;
});
console.log(profiles, newResult)


fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => console.log("data", data))
  .catch((error) => console.log("Error: ", error));