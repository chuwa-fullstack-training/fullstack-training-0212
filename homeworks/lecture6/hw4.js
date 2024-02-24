/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let s = num + "";
  let ans = "";
  let cnt = 0;
  let parts = s.split('.');
  let s1 = parts[0];
  let s2 = parts.length > 1 ? '.' + parts[1] : '';
  for(let i = s1.length - 1;i >= 0;i--){
    ans = s1[i] + ans;
    cnt++;
    if(cnt == 3){
      cnt = 0;
      ans = ',' + ans;
    }
  }
  ans += s2;
  return ans;
}

console.log(format(1234.56));
