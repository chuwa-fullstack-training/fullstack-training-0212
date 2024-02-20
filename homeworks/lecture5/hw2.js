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
  let left = 0, right = str.length - 1;
  while (left < right) {
    let temp = str[left];
    str[left] = str[right];
    str[right] = temp;
    left++, right--;
  }

  left = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      right = i - 1;
      while (left < right) {
        let temp = str[left];
        str[left] = str[right];
        str[right] = temp;
        left++, right--;
      }
      left = i + 1;
    }
  }
  right = i - 1;
  while (left < right) {
    let temp = str[left];
    str[left] = str[right];
    str[right] = temp;
    left++, right--;
  }
  return str;
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);