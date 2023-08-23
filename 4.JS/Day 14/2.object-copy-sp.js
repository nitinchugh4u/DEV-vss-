// spread operator

const p = {
    name: "Rahul",
    city: "Pune",
    details: {
      isMarried: false,
      isEngaged: false,
    },
  };


  const p2 =  { ...p };

  p.name = "nitin" //Its not going to affect the first level  of data
  p.city = "delhi"
  console.log("p:",p);
  console.log("p2:", p2);

  console.log("p.name:",p.name);//nitin 
  console.log("p2.name", p2.name) //rahul


  p.details.isEngaged = true;
  p.details.isMarried = true;

  console.log("p:",p)  //true

  console.log("p2:",p2) //true