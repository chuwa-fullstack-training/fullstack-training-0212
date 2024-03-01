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
  function reverse(start, end) {
    while (start < end) {
      let temp = str[start];
      str[start] = str[end];
      str[end] = temp;
      start++;
      end--;
    }
  }
  n = str.length;
  reverse(0, n - 1);
  let start = 0;
  for (let i = 0; i <= n; i++) {
    if (str[i] == ' ' || i == n) {
      reverse(start, i - 1);
      start = i + 1;
    }
  }
  return str.join('');
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
console.log(reverseWords(input));