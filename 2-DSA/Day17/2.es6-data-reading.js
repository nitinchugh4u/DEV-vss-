// const product = {
//     id: 1,
//     productName: "iPad Pro 11 Inch",
//     productBrand: "Apple",
//     productPrice: 78000,
//     productCurrency: "INR", 
// };

const product = {
    id: 1,
    productName: "iPad Pro 11 Inch",
    productBrand: "Apple",
    productPrice: 78000,
    productCurrency: "INR",
};

// const  productName = product.productName;
// console.log(productName);

// console.log(productName); (productName is not defined) 
const{productName,productBrand,isActive = "Not Available"} = product;
console.log(product);

console.log(productName);
console.log(productBrand);
console.log(isActive);

console.log(product.productName);
console.log(product.isActive);

console.log(product);

const message = `i'm ${productBrand} ${productName} ${isActive}`;
console.log(message);


console.log({message});



