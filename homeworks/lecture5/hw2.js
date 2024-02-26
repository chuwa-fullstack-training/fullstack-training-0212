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
  function reverseStr (str, l, r) {
    while (l < r){
      [str[l], str[r]] = [str[r], str[l]];
      l++;
      r--;
    }
  }
  reverseStr (str, 0, str.length-1);
  let i = 0;
  for (let end = 1; end < str.length; end++) {
    if (str[end] === ' '){
      reverseStr(str, i, end-1);
      i = end+1;
    }
  }
  reverseStr(str, i, str.length-1) 
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input)
console.log(input.join(''))
