/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let num_str = num.toString()
  let res = [];
  let decimal_idx = 0;
  while (decimal_idx < num_str.length) {
    if (num_str[decimal_idx] === '.') {
      break;
    }
    decimal_idx++;
  }

  for (let i = num_str.length - 1; i >= decimal_idx; i--) {
    res.push(num_str[i]);
  }

  let right = decimal_idx - 1;
  while (right >= 0) {
    res.push(num_str.charAt(right));
    if (right > 0 && (decimal_idx - right) % 3 === 0) {
      res.push(",");
    }
    right--;
  }
  return res.reverse().join("")
}

console.log(format(12345678))
