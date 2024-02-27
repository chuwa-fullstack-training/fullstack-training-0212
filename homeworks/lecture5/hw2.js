/**
 * reverse words in a string
 *
 * input: "the sky is blue"
 * output: "blue is sky the"
 *
 * extra: in-place
 * @param {string[]} str
 */
function reverseWords(str) {
  var headStart = 0;
  var headEnd = 0;
  var tailStart = str.length - 1
  var tailEnd = str.length - 1
  while(headEnd < tailStart)
  {
      while(headEnd < str.length)
      {
        if(str[headEnd] == ' ')
        {
          break;
        }
        headEnd++;
      }

      while(tailStart >= 0)
      {
        if(str[tailStart] == ' ')
        {
          break;
        }
        tailStart--;
      }

      if(headEnd >= str.length || tailStart < 0)
      {
        break;
      }
      else
      {
        
        var word1 = str.slice(headStart,headEnd);
        var word2 = str.slice(tailStart + 1,tailEnd + 1)
      
        str.splice(tailStart + 1, word2.length, ...word1)
        str.splice(headStart,word1.length,...word2)
        
        headStart += word2.length + 1;
        headEnd = headStart;

        
        tailEnd -= (word1.length + 1);
        tailStart = tailEnd;
      }

  }


  // your code here
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);
console.log(input)