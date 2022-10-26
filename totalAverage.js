// Write a method that will calculate the total of the vales in an array of integers
function getTotal(values ) {
  let total = 0;
  for(let value of values) {
    total += value;
  }
  return total;
}
// Write a method that will calculate the average of the values in an array of integers
function getAverage(values) {
  let average = 0;
  let totaln= getTotal(values);
  return total / values.length;
}

let numbers = [ 73, 45, 7 , 9, 10, 10, 11, 996, 13];
let total = getTotal(numbers);
let average = getAverage(numbers);
console.log('Total: ' + total);
console.log('Average: ' + average);