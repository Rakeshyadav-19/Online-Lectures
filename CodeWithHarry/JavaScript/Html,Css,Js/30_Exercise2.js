//Q use javascript to create a game of snake, water and gun. The game should ask you to enter S, W or G. The computer should be able to randomly generate S, W or G and declare win or loss using alert. Use confirm and prompt where ever required.

let user = prompt("Enter S, W or G");
let cpu = ["S", "W", "G"];
let cpuI = cpu[Math.floor(Math.random() * cpu.length)];

const match = (cpu, user) => {
  if (cpu === user) {
    return "Nobody. Match is tied";
  } else if (cpu === "S" && user === "W") {
    return "cpu";
  } else if (cpu === "S" && user === "G") {
    return "user";
  } else if (cpu === "G" && user === "W") {
    return "user";
  } else if (cpu === "G" && user === "S") {
    return "cpu";
  } else if (cpu === "W" && user === "S") {
    return "user";
  } else if (cpu === "W" && user === "G") {
    return "cpu";
  }
};
let result = alert("The winner is " + match(cpu, user));
document.write(
  `CPU:${cpu} <br> User:${user} <br>The winner is: ${result.toUpperCase()}`,
);
