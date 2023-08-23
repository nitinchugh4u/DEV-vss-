
const p = [
    {
      id: 1,
      name: "John Doe",
      city: "New York",
      state: "New York",
      isActive: "Available",
    },
    {
      id: 2,
      name: "Jane Smith",
      city: "Los Angeles",
      state: "California",
      isActive: "Not Available",
    },
    {
      id: 3,
      name: "Michael Johnson",
      city: "Chicago",
      state: "Illinois",
      isActive: "Available",
    },
    {
      id: 4,
      name: "Emily Brown",
      city: "Houston",
      state: "Texas",
      isActive: "Available",
    },
  ];
  
  const result = p.map((item) => ({
    // ...item,
    isActive: item.isActive ? "Available" : "Not Available",
  }));

  console.log(result);
  
//   const outArrMap = arrObjc.map((item, index) => {
//     const newItem = { ...item };
//     const { isActive } = newItem;
//     if (isActive === true) {
//       newItem.isActive = "Available";
//     } else {
//       newItem.isActive = "Not Available";
//     }
//     return newItem;
//   });