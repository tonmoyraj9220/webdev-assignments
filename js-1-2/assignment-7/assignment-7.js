const diceCount = Number(prompt("How many dice?"));

let sum = 0;

for (let i = 0; i < diceCount; i++) {
  sum += Math.floor(Math.random() * 6) + 1;
}

document.body.innerHTML = `Sum of dice: ${sum}`;