
const arr = [[0, 1], [2, 3], [4, 5]];
const flattened = arr.reduce((acc, element) => acc + element.join(''), '').split('')
console.log(flattened);