// Async function always returns a promise, other values are wraped in a promise automatically.
async function weather() {
  //WE an aply .then to it, since it is returing a promise
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 Deg");
    }, 2000);
  });

  let bangaloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 Deg");
    }, 5000);
  });

  // delhiWeather.then(alert)
  // bangaloreWeather.then(alert)

  // await Waits until the promise is not fullfiled, and return its value.
  // It is better alternate to .then
  console.log("Fetching Delhi Weather Please wait ...");
  let delhiW = await delhiWeather; //The code will wait until this process is not finished, then go to next line
  console.log("Fetched Delhi Weather: " + delhiW);
  console.log("Fetching Bangalore Weather Please wait ...");
  let bangaloreW = await bangaloreWeather;
  console.log("Fetched Bangalore Weather: " + bangaloreW);
  return [delhiW, bangaloreW];
}

const cherry = async () => {
  console.log("Hey I am cherry and I am waiting ");
};

const main1 = async () => {
  console.log("Welcome to weather control room");
  // Await waits until that process is not fully completed, then executes the next line of code
  let a = await weather(); //First runs weather and stores its result in a
  let b = await cherry();
};
main1();
