/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  const numString = num.toString();
  let result = '';
  
  for (let i = 0; i < numString.length; i++) {
    result += numString[i];
    
    if ((numString.length - i - 1) % 3 === 0 && i !== numString.length - 1) {
      result += ',';
    }
  }

  return result;
}
