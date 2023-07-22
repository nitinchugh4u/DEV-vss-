const products = [
    {
      id: 1,
      title: "Apple iPhone 14 Pro Max",
      description: "This is a amazing phone",
      price: 142300,
    },
    {
      id: 2,
      title: "Samsung Galaxy S23",
      description: "This is a new samsung phone",
      price: 142300,
    },
    {
      id: 21,
      title: "Samsung Galaxy S22",
      description: "This is a loaded device phone",
      price: 142300,
    },
    {
      id: 3,
      title: "Google Pixel 6",
      description: "This is a nothing but something",
      price: 142300,
    },
  ];
  
  function filterProducts(data, search) {
    search = search.toLowerCase();
  
    let filteredResult = [];
    for (let i = 0; i < data.length; i++) {
      // Destructure
      const { title } = data[i];
      const titleLC = title.toLowerCase();
      const descriptionLC = description.toLowerCase();
  
      // Searching
      if (titleLC.includes(search) || descriptionLC.includes(search)) {
        filteredResult.push(data[i]);
      }
  
      // Filters
      // Filter logic here
  
      /* if (title.toLowerCase().includes(search)) {
        filteredResult.push(data[i]);
      } */
    }
  
    return filteredResult;
  }
  
  console.log(filterProducts(products, "xy"));
  //filterProducts(products, "eL");
  