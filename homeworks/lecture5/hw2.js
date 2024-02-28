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
  for (let i = 0; i < str.length / 2; i++) {
    let temp = str[i];
    str[i] = str[str.length - 1 - i];
    str[str.length - 1 - i] = temp;
  }
  
  let start = 0;
  for (let i = 0; i <= str.length; i++) {
    if (i === str.length || str[i] === ' ') {
      for (let j = start; j < (start + i - 1) / 2; j++) {
        let temp = str[j];
        str[j] = str[i + start - 1 - j];
        str[i + start - 1 - j] = temp;
      }
      start = i + 1;
    }
  }
  console.log(str.join(''));
  
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);
