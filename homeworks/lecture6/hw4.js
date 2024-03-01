/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

console.log(format(12345678));
