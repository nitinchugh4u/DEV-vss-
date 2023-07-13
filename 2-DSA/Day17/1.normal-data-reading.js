const product  = {
    id: "1",
    name: "iPad Pro 11 inch",
    brand: "Apple",
    price: "78000",
    currency: "INR",
};

console.log(product.name);
const uName = product.name;

console.log(product.price);
const price = product.price;


console.log(product.isActive);
const isActive = product.isActive;


console.log(uName);
console.log(price);
console.log(isActive);

const message = `I'm buying ${product.brand} ${product.name}`;


console.log(uName,price,isActive,message);
console.log({uName,price,isActive, message});
