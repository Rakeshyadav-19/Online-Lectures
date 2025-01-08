// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

async function filterProducts(products, filter) {
  new Promise((resolve, reject) => {
    let list = products.filter((item) => {
      return products["category"] == filter;
    });
    resolve(list);
  });
}
let products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 25.99,
    inStock: true,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Gaming Keyboard",
    category: "Electronics",
    price: 75.99,
    inStock: false,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Water Bottle",
    category: "Home & Kitchen",
    price: 15.49,
    inStock: true,
    rating: 4.3,
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 45.99,
    inStock: true,
    rating: 4.7,
  },
  {
    id: 5,
    name: "Notebook",
    category: "Office Supplies",
    price: 3.99,
    inStock: true,
    rating: 4.1,
  },
];

async function main() {
  console.log(filterProducts(products, "Electronics"));
}

main();
