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
  if (str === null) {
    return null;
  }

  str.reverse();
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " || i === str.length - 1) {
      if (i === str.length - 1) {
        reverseArray(str, start, i);
      } else {
        reverseArray(str, start, i - 1);
      }
      start = i + 1;
    }
  }

  return str.join("");
}

function reverseArray(array, start, end) {
  while (start < end) {
    const temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
}

const input = "the sky is blue".split(""); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
console.log(reverseWords(input));
