let fruits = [ 'apple ', ' banana ', ' orange ' ];


let search = ' banana ';

let results = fruits.filter(function(fruit) {
    return fruit == search;
});

for(let result of results) {
    console.log(result);
}