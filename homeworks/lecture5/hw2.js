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
  // Reverse the entire string in-place
  str.reverse();
  console.log("s", str)

  // Reverse each individual word in-place
  let start = 0;
  for (let end = 0; end < str.length; end++) {
      if (str[end] === ' ' || end === str.length - 1) {
          // If end is the last character, include it in the reversal
          reverseArray(str, start, end === str.length - 1 ? end : end - 1);
          start = end + 1;
      }
  }
}

function reverseArray(arr, start, end) {
  while (start < end) {
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
  }
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);
console.log(input.join('')); // Output: "blue is sky the"