const profile = {
    userName: "Arvind",
    City: "Bhopal",
    company: "Google",
    location: "Munich",
  };

// Old Way vs New way

// Old ways
// Hello My name is Arvind & an Google Munich Employee,
// i'm from Bhopal.
// I got a job offer from Google Munich,
// though i belong to bhopal still Google offered me

const message = `hello my name is ${profile.userName} & an ${profile.company} ${profile.location} Empoluee,
i,m from ${profile.City}
I got a job offer from ${profile.company}${profile.location}
though i belong to ${profile.City.toLowerCase()} still ${profile.company} offered me`

console.log("message Message:", message);



  
// const profile = {
//     userName: "Arvind",
//     city: "Bhopal",
//     company: "Google",
//     location: "Munich",
//   };

// another way


const employeeName = profile.userName;
const employeeCompany = profile.compamny;
const employeeCity = profile.City;
const employeeCompanyLocation = profile.location;

const message2 = `hello my name is ${employeeName} and 
i am wrokng in ${employeeCompany} and i belongs from
${employeeCity} and my company location is ${employeeCompanyLocation}`;

console.log( "message2: ",message2);





// const profile = {
//     userName: "Arvind",
//     city: "Bhopal",
//     company: "Google",
//     location: "Munich",
//   };

// another way



const{userName,City,company, location} = profile;

const message3 = `hello my name is ${userName} and  i  am from ${City} and i work in  ${company} and i am from
${location} `;

console.log("Message3", message3);



