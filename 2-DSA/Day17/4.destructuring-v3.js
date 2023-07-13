const profile = {
    uName: "Palak",
    city: "Jabalpur",
};

const profile2 = {
    uName: "Nitin",
    city: "Paris",
};

const profile3 = {
    uName: "Sanket",
    city: "Thailand",
    details: {
        country: "India",
    },
};


const {uName,city} = profile;
console.log(uName);
console.log(city);

console.log(profile2);
const{uName:chotu,city:ghar} = profile2;
console.log(profile2);
console.log(profile2.uName);


const{details} = profile3;
console.log(details);

const {country} = details;
console.log(country);

console.log(uName, city);
console.log({uName, city})

console.log(chotu,ghar);
console.log({chotu,ghar});







// const profile = {
//     uName: "Palak",
//     city: "Jabalpur",
//   };
  
//   const profile2 = {
//     uName: "Chirag",
//     city: "Paris",
//   };
  
//   const profile3 = {
//     uName: "Sanket",
//     city: "Thailand",
//     details: {
//       country: "India",
//     },
//   };
  
//   const { uName, city } = profile;
//   const { uName: chotu, city: ghar } = profile2;
//   console.log(profile2);
//   const { details } = profile3;
//   const { country } = details;
  
//   console.log({ uName, city });
//   console.log({ chotu, ghar });

