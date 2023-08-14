const profile = {
    name: "Sanket",
    city: "Pune",
    state: "MH",
  };
  
  const cpProfile = {
    ...profile,
    isMarried: false,
    isWorking: true,
    isASportsMan: true,
    hobbies: ["cricket", "swimming"],
    graduationYear: 2022,
  };
  
  console.log("Profile: ", profile);
  console.log("cpProfile: ", cpProfile);








const cpProfile = {
    ...profile,
    isMarried: false,
    isWorking: true,
    isASportsMan: true,
    name:'Abhishek'
    hobbies: ["cricket", "swimming"],
    graduationYear: 2022,
  };