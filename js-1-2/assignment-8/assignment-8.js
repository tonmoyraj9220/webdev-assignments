const startYear = Number(prompt("Start year:"));
const endYear = Number(prompt("End year:"));

let output = "<ul>";

for (let year = startYear; year <= endYear; year++) {
  if (
    (year % 4 === 0 && year % 100 !== 0) ||
    year % 400 === 0
  ) {
    output += `<li>${year}</li>`;
  }
}

output += "</ul>";

document.body.innerHTML = output;