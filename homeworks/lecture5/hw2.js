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
  let [l, r] = [0, str.length - 1];
  while (l <= r) {
    const temp = str[l];
    str[l] = str[r];
    str[r] = temp;
    l++;
    r--;
  }
  return str.join("");
}

const input = "the sky is blue".split(""); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
res = reverseWords(input);
console.log(res);