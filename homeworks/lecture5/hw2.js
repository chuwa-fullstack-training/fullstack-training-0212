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
      const temp = str[start];
      str[start] = str[end];
      str[end] = temp;
      start++;
      end--;
    }
  }
  // reverse the whole array
  reverse(0, str.length - 1);
  //revese every word before space
  let start = 0;
  for (let end = 0; end < str.length; end++) {
    if (str[end] === ' ') {
      reverse(start, end - 1);
      start = end + 1;
    }
  }
  // reverse the last word
  reverse(start, str.length - 1);
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);
//input
//(15) ['b', 'l', 'u', 'e', ' ', 'i', 's', ' ', 's', 'k', 'y', ' ', 't', 'h', 'e']