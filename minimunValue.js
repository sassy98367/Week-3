//Write a method that will find the minimum value in an array of integers
let numbers = [ 73, 45, 7 , 9, 10, 10, 11, 996, 13];

/**
 * Gets the minimum for lowest value from the array.
 * @param {Array} values The values to search
 * @returns {Number} The minimum or lowest number found.
 */

function getMinimumValue(values) {
    let minimum = undefined;
    // repeat until we've looked at all the numbers
    for(let index = 0; index < values.length; index++ /* look at next number */) {
        let current = values[index];
        // if I haven't seen athe lowest number yet OR the current number is lower than the lowest number I've seen
        if ((minimum == undefined) || (current < minimum)) {
            //set the current number as the lowest number
            minimum = current;
        }
    }
    return minimum;
}
let minimum = getMinimumValue(numbers);
console.log('Minimum: ' + minimum);
//to get maximim just change the < to > and wording from min to max