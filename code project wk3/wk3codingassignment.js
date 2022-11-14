//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
//•	Do not use numbers to reference the last element, find it programmatically, 
//•	ages[7] – ages[0] is not allowed!

//1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//1c.	Use a loop to iterate through the array and calculate the average age. 


function getTotal(values ) {/*need to get total in order to get average*/
  let total = 0;
  for(let value of values) {
    total += value;
  }
  return total;
}

function getAverage(values) {
  let average = 0;
  let total = getTotal(values);
  return total / values.length;
}

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
let total = getTotal(ages);
let average = getAverage(ages);
console.log('Total: ' + total);
console.log('Average: ' + average);
//used ages.push to try and add 44 could not get it to add it into the array
let firstElement = ages.shift();
let lastElement = ages[ages.length - 1];
//console.log(firstElement); used to make sure this worked
//console.log(lastElement);
console.log(lastElement - firstElement + ' is the total of the first element subtracted from the last element');


//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
//2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
//2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
//3.	How do you access the last element of any array? .shift
//4.	How do you access the first element of any array? .length - 1
//5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//For example:
//namesArray = ["Kelly", "Sam", "Kate"] //given this array
//nameLengths = [5, 3, 4] //create this new array
//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 


let names = ['Sam', 'Tommy','Tim', 'Sally', 'Buck', 'Bob'];
console.log('names: ', names);
let sumCount = 0;
for(let i = 0; i < names.length; i++) {
  //names[index].length counts the number of letters in the name
  console.log('index #: ',i, ' name:',names[i].length);
  console.log(names[i].length);
  sumCount = sumCount + names[i].length;
  //another way to get the sum of all in the array sumCount += names[i].length
}
console.log('sum: ', sumCount);
console.log('average: ', sumCount / names.length);

let concatenated = '';
for(let i = 0; i < names.length; i++) {
  console.log(names[i]);
  concatenated = concatenated + ' ' + names[i];
}
console.log(concatenated);

let nameLengths = [];
for(let i = 0; i < names.length; i++) {
  console.log(names[i].length);
  nameLengths.push(names[i].length);
}
console.log('printing nameLengths: ',nameLengths);
let anotherSum = 0;
for(let i = 0; i < nameLengths.length; i++) {
  console.log(nameLengths[i]);
  anotherSum = anotherSum + nameLengths[i];
}
console.log('sum of nameLengths: ', anotherSum);

//7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
mixed("wordn", 3);
function mixed(wordToConcatenate, timesToConcatenate){
    let outString = "";
    for(var i = 1; i <= timesToConcatenate; i++){
        outString += wordToConcatenate;
    }
    console.log(outString);
}

//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.
//•	The full name should be the first and the last name separated by a space.

function fullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
console.log('Barbara', 'Wenzl');

//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.

function addArray(array) {
  console.log(array);
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    console.log('each number in array: ',array[i]);
    sum = sum + array[i];
  }
  console.log('sum: ', sum);
  if(sum > 100) {
    //console.log(true);
    return true;
  }else {
    //console.log(false);
    return false;
  }
}
console.log(addArray([10, 40, 60]));

//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.

function takesarray(array) {
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    console.log(array[1]);
    sum = sum + array[i];
  }
  console.log('sum: ', sum);
  console.log('average:' ,sum / array.length);
}

takesarray([100, 200, 300]);

//11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array

function twoArrays(array1, array2) {
  let sum1 = 0;
  for(let i = 0; i < array1.length; i++) {
    console.log(array1[i]);

    sum1 = sum1 + array1[i];
  }
  console.log('sum of array1', sum1);

  let average1 = sum1 / array1.length;
  console.log('average1:', average1);

  let sum2 = 0;
  for(let i = 0; i < array2.length; i++) {
    console.log('printing array2:', array2[i]);
    sum2 = sum2 + array2[i];
  }
  console.log('sum of array2:',sum2);
  let average2 = sum2 / array2.length;
  console.log('average 2:', average2);

  if(average1 > average2) {
    console.log(true);
  }else {
    console.log(false);
  }
}
twoArrays([100, 300, 600], [20, 40, 100, 200]);

//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.


let isHotOutside = true;
let moneyInPocket = 11;

function willBuyDrink() {
  if(isHotOutside && moneyInPocket > 10.50) {
    console.log('true, will buy drink');
  }else {
    console.log('false');
  }

}
willBuyDrink(isHotOutside, moneyInPocket);

//13.	Create a function of your own that solves a problem. 
//•	In comments, write what the function does and why you created it.
let income = 6500.00;
let carPayment = 600.00;
let rent = 2500.00;
let groceries = 800.00;
let allOtherBills = 1800.00;
let totalBills = (rent + groceries + allOtherBills);
function canBuyIt() {
  if(totalBills <= income - 600) {
      console.log('Yes I can get the car!')
  } else {
    console.log('I need to save money.');
  }
}
canBuyIt(totalBills, carPayment);


//can not get a video to upload correctly so I will explain here. I created a function to determine
//if I could afford a 600.00 a month car payment with all the other bills that I had per month