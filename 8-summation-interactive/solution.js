const numbers = [];

let number = Number(prompt("Give me a number"));

while (number !== null && number !== 0) {
  numbers.push(number);
  number = Number(prompt("Give me a number"));
}

alert(calculateSumation(numbers));

function calculateSumation(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}
