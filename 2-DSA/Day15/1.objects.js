const profile = {
    name: "Sushmitha",
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    pincode: 6787445,
    isActive: true,
    hobbies: ["Yoga", "Baharatnatyam"],
    details: {
      graduation: "Yes",
      postGraduation: null,
    },
  };
  
console.log(profile.name); // Sushmitha
console.log(profile.city); // Chennai
console.log(profile["city"]); // Chennai
console.log(profile.contactNo); // undefined
console.log(profile.details.graduation); // Yes
console.log(profile["details"]["graduation"]); // Yes
console.log(profile.details.postGraduation); // null







const profiles = {
    name: "One",
    name: "Two",
    name: "Three",
    city: "ABC",
    nAme: "Nitin",
  };
  
  console.log(profiles.name); // Three
  console.log(profiles.city); // ABC
  
