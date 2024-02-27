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
}
function reverseWords(chars) {
  // Helper function to reverse a portion of the array
  function reverse(start, end) {
    while (start < end) {
      let temp = chars[start];
      chars[start++] = chars[end];
      chars[end--] = temp;
    }
  }

  // Step 1: Reverse the entire array
  reverse(0, chars.length - 1);

  // Step 2: Reverse each word within the array
  let wordStart = null;
  for (let i = 0; i <= chars.length; i++) {
    if (chars[i] === ' ' || i === chars.length) {
      if (wordStart !== null) {
        reverse(wordStart, i - 1);
        wordStart = null;
      }
    } else if (wordStart === null) {
      wordStart = i;
    }
  }
}

// Example usage
const input = 'the sky is blue'.split(''); // Split the string into an array of characters
reverseWords(input);
console.log(input.join('')); // Should log: "blue is sky the"
