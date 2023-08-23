const profile = {
  name: "Rahul",
  city: "Pune",
};

console.log({ ...profile, name: "Deepak", city: "Delhi", state: "Delhi" });
// console.log({ name:'Rahul', city:'Pune', name: "Deepak", city: "Delhi", state:'delhi' });

console.log({ name: "Deepak", city: "Delhi", state: "Delhi", ...profile });
//console.log({ name: "Deepak", city: "Delhi", state: "Delhi", name:'Rahul', city:'Pune'});

function tryMe(data) {
  console.log("LN13", data);
}

tryMe({ ...profile, city: "Chennai" });