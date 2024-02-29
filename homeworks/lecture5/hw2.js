/**
 * reverse words in a string
 *
 * input: "the sky is blue"
 * output: "blue is sky the"
 *
 * extra: in-place
 * @param {string[]} str
 */
function reverseWords(str) {
  // your code here
  let words = str.split(' ');
  let reversedWords = []; 
  for (let word of words) {
    let reversedWord = word.split('').reverse().join('');
    reversedWords.push(reversedWord);
  }
  let result = reversedWords.join(' ');
  console.log(result);
}
const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);