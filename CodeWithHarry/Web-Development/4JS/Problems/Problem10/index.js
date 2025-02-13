// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

async function brewCoffee(cof) {
  return new Promise((resolve, reject) => {
    let timeout = Math.floor(Math.random() * 10000) + 1000;
    setTimeout(() => {
      resolve(`Your ${cof} is ready`);
    }, timeout);
  });
}

async function main() {
  console.log("Brewing Coffee...");
  let coffee = prompt("Entert the coffe you want");
  // let coffee = "latte"
  let order = await brewCoffee(coffee);

  console.log(order);
}

main();
