const p = {

name: "Rahul",
city: "Pune",
details:{
    isMarried: false,
    isEngaged: false
   }
};

const p2 = p;
console.log("p:",p);
console.log("p2:",p2);

p.name = "nitin";
p.city = "Delhi";

console.log("p:",p)
console.log("p2:",p2)

p.details.isMarried = true;

console.log("p:",p);
console.log("p2:",p2)

// now due to Shallow copy it will change name in all refereces;