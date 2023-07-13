const profiles = [
    {name: "rahul",
    age: 28,
    city: "banglore",
},
    {name: "varun",
    age: 22,
    city: "Mumbai",
},
    { name:"tarun",
    age: 24,
    city: "pune",
},
    
{name: "mitesh",
 age: 29,
 city: "mumbai",
},
];

const filteredArray =[];
for(let i =0; i<profiles.length; i++){
    if(typeof profiles[i] ==="object" && profiles[i].hasOwnProperty("age")){
    if(profiles[i].age >=28){
        filteredArray.push(profiles[i]);
    }
    }
}
console.log(filteredArray);

const filteredArrayList =profiles.filter(
 (meriProfile) => meriProfile.age>= 28   
);
console.log(filteredArray);



