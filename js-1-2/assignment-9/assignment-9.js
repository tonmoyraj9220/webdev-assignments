const number = Number(prompt("Enter an integer:"));

let isPrime = true;

if (number <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  document.body.innerHTML = `${number} is prime.`;
} else {
  document.body.innerHTML = `${number} is not prime.`;
}