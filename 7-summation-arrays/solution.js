function calculateSumation(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

const oneTo5 = calculateSumation([1, 2, 3, 4, 5]);
const fiveTo10 = calculateSumation([5, 6, 7, 8, 9, 10]);

console.log(oneTo5);
console.log(fiveTo10);
