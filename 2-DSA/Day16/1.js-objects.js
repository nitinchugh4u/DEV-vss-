const profile ={
    name:"Sushmitha",
    Ghost: "Dyen",
    city: "chennai",
    state: "Tamil nadu",
    pincode: "1100032",
    isActive: true,
    hobbies: ["yoga", "bharatnatyam"],
    details: {
        graduation: "yes",
        postGraduation: null,
    },
};


// reading the values

console.log(profile.name);
console.log(profile.city);
console.log(profile["city"]);
console.log(profile.contactNo);
console.log(profile.name);
console.log(profile.details.graduation);
console.log(profile["details"]["graduation"]);
console.log(profile.details.postGraduation);

// accessing arays
console.log(profile.hobbies);
console.log(profile.hobbies[1]);
console.log(profile.hobbies[2]);
