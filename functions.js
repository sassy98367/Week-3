//num even or odd
let number = 10;
console.log(number + ' is even = ' + (number % 2 == 0));
let number2 = 11;
console.log(number2 + ' is even = ' + (number2 % 2 == 0));
//function is a reusable piece of code
function isEven(number) {
  if (number % 2 == 0) {
    return true;
  }
  else {
    return false;
  }
}

function isOdd(number) {
    return (number % 2 != 0);
}

console.log(number + ' is even = ' + isEven(number));
console.log(number2 + ' is even = ' + isEven(number2));
console.log(number + ' is odd = ' + isOdd(number));
console.log(number2 + ' is odd = ' + isOdd(number2));

let numbers = [ 1, 2, 4, 6, 8, 9, 22 ];

function outputEvenNumbers(mynumbers) {
    for(let number of mynumbers) {
        if (isEven(number)) {
            console.log(number);
        }
    }
}
outputEvenNumbers(numbers);
console.log('-------------------------');
outputEvenNumbers([1, 43, 5, 78, 10, 434, 45]);


