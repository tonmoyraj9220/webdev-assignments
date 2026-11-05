const diceCount = Number(prompt("Number of dice:"));
const targetSum = Number(prompt("Desired sum:"));

let matches = 0;
const simulations = 10000;

for (let i = 0; i < simulations; i++) {
  let sum = 0;

  for (let j = 0; j < diceCount; j++) {
    sum += Math.floor(Math.random() * 6) + 1;
  }

  if (sum === targetSum) {
    matches++;
  }
}

const probability = matches / simulations * 100;

document.body.innerHTML =
  `Probability to get sum ${targetSum} with ${diceCount} dice is ${probability.toFixed(2)}%`;