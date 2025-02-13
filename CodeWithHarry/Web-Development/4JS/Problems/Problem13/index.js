// The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

let products = [
  {
    name: "kurkure",
    quantity: 2,
    price: 10,
  },
  {
    name: "Kinder Joy",
    quantity: 2,
    price: 50,
  },
  {
    name: "Pepsi",
    quantity: 2,
    price: 40,
  },
];

function calculateTotal(arr) {
  let total = 0;
  arr.map((e) => {
    return (total += e.quantity * e.price);
  });

  return total;
}

console.log(calculateTotal(products));
