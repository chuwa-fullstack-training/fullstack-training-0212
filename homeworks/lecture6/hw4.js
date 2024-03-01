/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */

function format(num) {
  const parts = num.toString().split(".");
  
  let integerPart = parts[0].split("").reverse().join("");
  
  let formattedIntegerPart = '';
  for (let i = 0; i < integerPart.length; i += 3) {
    formattedIntegerPart += integerPart.substring(i, i + 3) + ",";
  }
  
  formattedIntegerPart = formattedIntegerPart.split("").reverse().join("").replace(/^,/, "");
  
  return parts[1] ? `${formattedIntegerPart}.${parts[1]}` : formattedIntegerPart;
}

