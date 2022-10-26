// take multiple items and reduce it down to a single value

let fruits = [ ' apple ', ' banana ', ' orange '];

let mixFruitsFunc = function(previous, current) {
return previous + '+' + current;
}
console.log(mixFruitsFunc(' grape ', ' cherry '));
let mixedFruits = fruits.reduce(mixFruitsFunc);
console.log(mixedFruits);

let numbers = [ 1, 2, 3, 4, 5 ];
let total = numbers.reduce(function(previous, current) {
    return previous + current;
}, 0);
console.log(' total ' + total);