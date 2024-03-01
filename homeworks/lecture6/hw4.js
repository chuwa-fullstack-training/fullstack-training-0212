/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  var str = num.toString().split('.');
  str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  str[1] = str[1].replace(/(\d{3})/g, '$1,');
  return str.join('.');
}
