function filterPositiveIntegers(arr) {
    return arr.filter(item => Number.isInteger(item) && item > 0);
}

let mixedArray = [1, -2, "hello", 3.5, 0, 10, -7, 8, "world"];

let positiveIntegersArray = filterPositiveIntegers(mixedArray);

console.log(positiveIntegersArray);
