let terminal = document.getElementById("line");

const randDelay = () => {
  return new Promise((resolve, reject) => {
    timeout = 1 + 6 * Math.random();
    setTimeout(() => {
      resolve();
    }, timeout * 1000);
  });
};

let hack = async (text) => {
  await randDelay();
  return new Promise((resolve) => {
    setTimeout(() => {
      terminal.innerHTML = terminal.innerHTML + text;
    }, 1000);
    setTimeout(() => {
      terminal.innerHTML = terminal.innerHTML + ".";
    }, 2000);
    setTimeout(() => {
      terminal.innerHTML = terminal.innerHTML + ".";
    }, 3000);
    setTimeout(() => {
      terminal.innerHTML = terminal.innerHTML + "." + `<br>`;
      resolve(500);
    }, 4000);
  });
};

const target = async () => {
  await hack(" Initializing Hacking");
  await hack(" Reading your Files");
  await hack(" Password files Detected");
  await hack(" Sending all passwords and personal files to server");
  await hack(" Cleaning up");
  console.log("log");
};

target();

// Harry sir
const addItem = async (item) => {
  await randomDelay();
  let div = document.createElement("div");
  div.innerHTML = item;
  document.body.append(div);
};

const randomDelay = () => {
  return new Promise((resolve, reject) => {
    timeout = 1 + 6 * Math.random();
    setTimeout(() => {
      resolve();
    }, timeout * 1000);
  });
};

async function main() {
  let t = setInterval(() => {
    let last = document.body.getElementsByTagName("div");
    last = last[last.length - 1];
    if (last.innerHTML.endsWith("...")) {
      last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
    } else {
      last.innerHTML = last.innerHTML + ".";
    }
  }, 100);

  let text = [
    "Initialized Hacking now reading your data",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up",
  ];

  for (const item of text) {
    await addItem(item);
  }

  await randomDelay();
  clearInterval(t);
}
main();
