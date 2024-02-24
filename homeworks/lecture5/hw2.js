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
  str.reverse();

  let start = 0;
  let end = 0;

  while (start < str.length) {
    while (str[end] !== " " && end < str.length) {
      end++;
    }
    for (let i = start, j = end - 1; i < j; i++, j--) {
      [str[i], str[j]] = [str[j], str[i]];
    }
    start = end + 1;
    end = start;
  }

  return str.join("");
}

const input = "the sky is blue".split(""); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);

