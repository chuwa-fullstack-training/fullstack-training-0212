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
  let l = 0, r = str.length - 1;
  while(l < r) {
    let temp = str[l];
    str[l] = str[r];
    str[r] = temp;
    l++;
    r--;
  }
  const spaceIdx = [];
  for(let key in str) {
    if(str[key] === ' ') {
      spaceIdx.push(key);
    }
  }
  spaceIdx.push(str.length.toString());
  let start = 0;
  for(let idx of spaceIdx) {
    let end = idx - 1;
    while(start < end) {
      let temp = str[end];
      str[end] = str[start];
      str[start] = temp;
      start++;
      end--;
    }
    start = idx;
    start++;
    // console.log(start);
  }
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);
console.log(input.join(""));