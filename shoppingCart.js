//Exporting modules
console.log('Exporting module');

// //Blocking code
// console.log('Start fetchng users');
// await fetch(`https://jsonplaceholder.typicode.com/users`);
// console.log(`finished fetching`);

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
