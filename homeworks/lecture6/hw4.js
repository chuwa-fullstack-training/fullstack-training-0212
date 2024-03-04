/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let [integer, decimal] = num.toString().split(".");
  let res = "";

  while (integer >= 1000) {
    res = "," + (integer % 1000).toString() + res;
    integer = parseInt(integer / 1000);
    // console.log(integer);
  }

  res = integer + res;

  return decimal === undefined ? res : res + "." + decimal;
}

console.log(format(12345.678));
