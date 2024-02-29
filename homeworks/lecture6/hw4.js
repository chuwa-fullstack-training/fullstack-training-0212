/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let str = num.toString();
  // console.log(str);
  let decimal;
  let toAdd = str;
  if(str.includes(".")) {
    // float
    let idx = str.indexOf(".");
    toAdd = str.slice(0, idx);
    decimal = str.slice(idx);
  }
  for(let i=toAdd.length; i >= 0; i -= 3) {
    if(i == toAdd.length) continue;
    toAdd = toAdd.slice(0,i) + "," + toAdd.slice(i);
  }
  if(decimal) {
    toAdd = toAdd + decimal;
  }
  return toAdd;
}
console.log(format(12345678));
console.log(format(1234.56));