// ternary operator denoted by -> ?
// ?
// it is like if else condition

let age = 17;
const result = age < 18 ?  "You can not vote" : "you can vote";
console.log(result);

let ageV2 = 19;
const resultV2 = ageV2 < 18 ? "You can not vote" : "You can vote";
console.log(resultV2);


// complex statement

const userAge = 17;
const userCity = "Bihar";
const isActive = true;

// const resultV3 = userAge > 18 ? userCity =="Bihar" ? "you can vote" : "you cant vote" : "you cant vote";

const resultV3 = userAge > 18 ?
                 userCity === "Bihar" ?
                   "You can Vote" : "you cant vote"
                   : "you cant vote";



const resultV4 = userAge > 18 &&  usercity === "Bihar" ? "you can vote" : "you cant vote";
console.log("V3:" , resultV3);
console.log("v3:" , resultV4);


