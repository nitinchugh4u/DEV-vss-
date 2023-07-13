const userAge = 17;
const userCity = "bihar";
const isActive = true;

const resultV3 =
    userAge > 18
        ? userCity === "bihar"
            ? "you can vote"
            : "you cant vote"
        : "you cant vote";
console.log(resultV3);

if (userAge > 18) {
    if (userCity === "bihar") {
        console.log("yes, you can  vote");
    } else {
        console.log(" No, you cant vote");
    }
} else {
    console.log(" No,you cant vote");
}


