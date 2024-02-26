/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let numStr = num.toString();
  let result = "";

  let dotIndex = numStr.indexOf(".");
  if (dotIndex === -1) {
    dotIndex = numStr.length;
  }

  result += numStr.slice(dotIndex);

  let i = dotIndex - 1;

  while (i >= 0) {
    result = numStr[i] + result;
    if ((dotIndex - i) % 3 === 0) {
      result = "," + result;
    }
    i--;
  }

  return result;
}
