/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let numStr = num.toString();

  const [integer, decimal] = numStr.split('.');
  let result = decimal===undefined ? '' : '.' + decimal;
  
  let count = 0;
  for (let i = integer.length - 1; i >= 0; i--) {
    count++;
    result = integer[i] + result;
    if (count % 3 === 0 && i !== 0) {
      result = ',' + result;
    }
  }
  return result;

}

console.log(format(33334444) )
console.log(format(12345678))
console.log(format(1234.56))
