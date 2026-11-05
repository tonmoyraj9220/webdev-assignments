const answer = confirm("Should I calculate the square root?");

if (answer) {
  const number = Number(prompt("Enter number:"));

  if (number < 0) {
    document.body.innerHTML =
      "The square root of a negative number is not defined";
  } else {
    document.body.innerHTML = Math.sqrt(number);
  }
} else {
  document.body.innerHTML = "The square root is not calculated.";
}