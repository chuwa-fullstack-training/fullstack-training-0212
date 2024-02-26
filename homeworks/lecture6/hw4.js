/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let numStr = num.toString();
  
  let divide = numStr.split('.');
  let integer = divide[0];
  let fractor = divide[1];
  
  let ans = '';
  for (let i = integer.length - 1, cnt = 0; i >= 0; i--){
    ans = integer[i] + ans;
    cnt ++;
    if (cnt == 3 && i !== 0) {
      cnt = 0;
      ans = ',' + ans;
    }
  }
  if (fractor) {
    return ans + '.' + fractor;
  }
  return ans;
}
