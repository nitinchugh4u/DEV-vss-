const p = {
    name: "Rahul",
    city: "Pune",
    details: {
      isMarried: false,
      isEngaged: false,
    },
  };
  
  const p2 = { ...p };

  p.name = "Romesh"; // It's not going to affect the first level of data
  console.log("p",p)
  console.log("p2",p2)
  console.log("details",p.details);

  p.details.isEngaged = true;  // It's will change data in both object, since internally objects are maintaining shallow copy or references

  console.log("p",p)
  console.log("p2",p2)

  // console.log("p.details.isEngageed",p.details.isEngaged);//true