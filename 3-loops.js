// Loops allow you to execute code repeatedly based on a condition.

// Task 1: Write a for loop to print numbers from 1 to 5.
for (let index = 1; index <= 5; index++) {
  console.log(index);
}
// Task 2: Create a while loop that prints the numbers 10 to 15.
let i = 10;
while (i <= 15) {
  console.log(i);
  i++;
}
// Task 3. Write for-loop that loops through the array `numbers`
// compare every number with the variable `lowest`.
// If the number is lower than `lowest` update `lowest` to the current number
// Use console.log to print `lowest`.
const numbers = [9, 10, 17, 34, 2, 4, 100];
let lowest = numbers[0];
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] < lowest) {
    lowest = numbers[index];
  }
  // result = lowest;
}
console.log(lowest);

// Task 4, Write a function `getLowest` that takes an array of numbers as
// input and returns the lowest number.

function getLowest(array) {
  let lowestNumber = array[0];
  array.forEach((number) => {
    if (number < lowestNumber) {
      lowestNumber = number;
    }
  });
  return lowestNumber;
}
console.log(getLowest(numbers));
