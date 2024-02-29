/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
 function format(num):string{
  // your code here
  let temp : string = Math.floor(num).toLocaleString();

  let char : string = num.toString();
  let array : string[] = char.split('.');
  return num % 1 === 0 ? temp : temp + '.' + array[1];
}
console.log(format(12345678)); // Outputs: "12,345,678"
console.log(format(1234.56));   // Outputs: "1,234.56"
