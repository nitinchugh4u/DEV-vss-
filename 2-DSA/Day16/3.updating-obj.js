const profile ={
    name: "one",
    city: "ABC"
};
// before addition
console.log(profile);
console.log(profile.country);
// add new data
profile.country ="USA";

console.log(profile);
console.log(profile.country);
// add new Data


// update existing data
profile.country ="india" ;
console.log(profile);

profile["country"]= "london";
console.log(profile);


profile.city ="pune";
console.log(profile);

console.log("profile",profile);
console.log("profile.country", profile.country);



