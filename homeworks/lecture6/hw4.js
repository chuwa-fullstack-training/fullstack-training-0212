/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  var stringFormat = new String(num)
  var pos = stringFormat.indexOf(".");
  var result = []
  if(pos === -1)
  {
    pos = stringFormat.length
  }

  for(let i = stringFormat.length - 1; i > pos; i--)
  {
    result.unshift(stringFormat.charAt(i));
  }
  if(pos != stringFormat.length)
  {
    result.unshift(".")
    pos--;
  }

  var count = 0
  while(pos >= 0)
  {
   
    if(count == 3)
    {
      result.unshift(",")
      count =0
    }
    count += 1;
    result.unshift(stringFormat.charAt(pos))
    
    pos--;
  }
  return result.join("");
  // your code here
}

console.log(format(13456575476.56876))