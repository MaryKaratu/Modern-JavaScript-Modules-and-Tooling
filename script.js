// //Importing module
// // import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

import { cart } from './shoppingCart';

// import shoppingCart from './shoppingCart';

// // console.log('Importing module');

// // addToCart('bread', 5);
// // console.log(price, tq);

// console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// ///Doable but not advisable in a real word
// // import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// // console.log(price);

// import add, { cart } from './shoppingCart.js';
// add('pizza', 2);
// add('bread', 5);
// add('apples', 4);

// console.log(cart);

// /////////////////////////////////
// //Top level Await
// // console.log('Start something');
// // const res = await fetch(`https://jsonplaceholder.typicode.com/posts `);
// // const data = await res.json();
// // console.log(data);
// // console.log('something');

// const getLastPost = async function () {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const data = await res.json();
//   console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();

// //Not very clean
// // lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

//////////////
//Module Pattern

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost);

//////////////////////////////
//Common Modules
//Export
// export.addToCart = function(product, quantity){
//   cart.push({product, quantity});
//   console.log(`${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
//   );
// }

//Import Pattern
// const { addToCart } = require("./shoppingCart");

/////////////////////////////////////////////////
