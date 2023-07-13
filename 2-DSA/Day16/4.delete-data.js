const profile ={
    name:"tarun",
    city: "chennai",
    company: "ces",
};

console.log(profile);

//  first add then delete a data -> delete key an value
// add
profile.age = "18";
console.log(profile);
// update
profile.age = "20";
console.log(profile);
// delete
delete profile.age;
console.log(profile);


