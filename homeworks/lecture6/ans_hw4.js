/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  
    // your code here
    const numStr = num.toString();
  
    const [integerPart, decimalPart = ''] = numStr.split('.');
  
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
    const result = decimalPart ? `${formattedIntegerPart}.${decimalPart}` : formattedIntegerPart;
  
    return result;
  
  }
  