// The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

async function placeOrder() {
  return new Promise((resolve, reject) => {
    let timeout = Math.floor(Math.random() * 10000) + 1000;
    setTimeout(() => {
      resolve("Order Plcaed");
    }, timeout);
  });
}

async function main() {
  console.log("Placing order...");
  let order = await placeOrder();

  console.log(order);
}

main();
