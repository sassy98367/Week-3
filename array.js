//let num1 = 10;
//let num2 = 20;
//let num3 = 30;

let numbers = [10, 20, 30, 40 ];
//console.log('numbers.length=' + numbers.length);
//numbers.push(10); 
//numbers.pop pops the number back off array
//numbers.push(20); /* push lets you add to the end of array*/
console.log('numbers.length=' + numbers.length);
//numbers.length tells how many items are inside array
///* arrays are 0 based so first item is at zero
console.log('first element = ' +numbers[0]); 
//console.log(numbers[0, 1, 3]); this will not list all numbers
//always use numbers(of whatever you called it).length to get the length when calling all in array
for(let index = 0; index < numbers.length; index++) {
    console.log('['+index+'] = ' + numbers[index]);
}
//can change the value of an array by doing numbers[0] = 1000
// to get last item in array always put -1
numbers[0] = 1000;
console.log('first = ' + numbers[0]);
console.log('last = ' + numbers[numbers.length - 1]);
//numbers.pop removes last item must put in a let whatever = numbers.pop

console.log('simple loop');
for(let index = 0; index < 4; index++) {
    let number = numbers[index];
    console.log(number);
}
let objects = ['George', 46, new Date() ];
for(let obj of objects) {
    console.log(obj);
}

let twod = [
    [ 1, 2, 3],
    [ 'a', 'b', 'c']
];
console.log(twod[0][0]);