
// transforms each element into something different
let fruits = [ ' apple ', ' banana ', ' orange '];

let slices = fruits.map(function sliceFruit(fruit, index) {
  //console.log(fruit);
  return 'slice of ' + fruit;
});
//for(let slice of slices) {
//console.log(slice); does the same thing as below
//}
slices.forEach(function(slice) {
  console.log(slice);
});

for(let fruit of fruits) {
  console.log(fruit);
}