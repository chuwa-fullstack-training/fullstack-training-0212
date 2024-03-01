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
  // your code here
  let temp_str = '';
  let word_array = [];
  for(let i = 0; i < str.length; i++){
    if(str[i] === ' ' || i === str.length-1){
      if(i === str.length-1){
        temp_str += str[i];
      }

      word_array.push(temp_str);
      temp_str = '';
    }else{
      temp_str += str[i];
    }
  }

  let res = '';
  for(let i = word_array.length-1; i >= 0; i--){
    res += word_array[i];

    if(i !== 0){
      res += ' ';
    }
    
  }
  
  console.log(res);
  return res;
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);