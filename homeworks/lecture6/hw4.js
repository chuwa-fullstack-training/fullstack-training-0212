/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  let [integer, fraction] = num.toString().split('.');

  let res = "";
  const n = integer.length;

  for (let i = 0; i < n; i++) {
    if (i > 0 && (n - i) % 3 === 0) {
      res += ',';
    }
    res += integer[i];
  }

  if (fraction) {
    res += '.' + fraction;
  }

  return res;
}
console.log(format(12345678))
console.log(format(1234.56))
