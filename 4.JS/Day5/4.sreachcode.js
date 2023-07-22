
// if (title.toLowerCase().includes(search)) {
//   filteredResult.push(data[i]);
// }
// if data[i].title.includes(search)) {
//   filteredResult.push(data[i]);
// }

const products = [
  {
    id: 1,
    title: "Apple iPhone 14 Pro Max",
    price: 142300,
  },
  {
    id: 2,
    title: "Samsung Galaxy S23",
    price: 142300,
  },
  {
    id: 21,
    title: "Samsung Galaxy S22",
    price: 142300,
  },
  {
    id: 3,
    title: "Google Pixel 6",
    price: 142300,
  },
];

function filterProducts(data, search) {
  search = search.toLowerCase();

  let filteredResult = [];
  for (let i = 0; i < data.length; i++) {
    // Destructure
    const { title } = data[i];

    if (title.toLowerCase().includes(search)) {
      filteredResult.push(data[i]);
    }
  }

  return filteredResult;
}

console.log(filterProducts(products, "xy"));
//filterProducts(products, "eL");
