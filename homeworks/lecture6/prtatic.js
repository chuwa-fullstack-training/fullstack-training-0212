const myset = new Set();
function all(...args) {
    return [...new Set(...args)];
}
/**
 * 1
 * sucess
 * 4
 * 
 */
const isOdd = (...args) => !(args % 2 === 0);
console.log(isOdd(4));

const addTwo = (input) => input.map(num => num + 2);
console.log(addTwo([1,2,3]));

const getLast = (input) => input[input.length - 1];
console.log(getLast([1,2,3]));

const setDefaullt = value => flag => flag ? flag:value;
const sum = (input) => input.reduce((acc, cur) => acc +=cur, 0);
const getLength = (str) => str.length;
console.log(getLength("1234"));
const convert = (str) => parseInt(str, 16);
console.log(convert("af"));
const only = (input) => input.filter(value => value);
console.log(only([0,1, '', 'a']));
const join = (array1, array2) => [...array1, ...array2];
console.log(join([1,2] ,[3,4]));
const vowel = ['A', 'a', 'e', 'E', 'I', 'O', 'U', 'i', 'o', 'u'];
const removeVowel = (str) => {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        if (!vowel.includes(str[i])) {
            res+=str[i];
        }
    }
    return res;
}
console.log(removeVowel('ABC'));