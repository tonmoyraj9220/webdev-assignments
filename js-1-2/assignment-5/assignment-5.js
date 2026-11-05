const year = Number(prompt("Enter year:"));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  document.body.innerHTML = `${year} is a leap year.`;
} else {
  document.body.innerHTML = `${year} is not a leap year.`;
}