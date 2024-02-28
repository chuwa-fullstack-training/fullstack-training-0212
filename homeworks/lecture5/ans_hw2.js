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
    const reverseArray = (start, end) => {
        while (start < end) {
            const temp = str[start];
            str[start] = str[end];
            str[end] = temp;
            start++;
            end--;
        }
    };

    let start = 0;

    reverseArray(0, str.length - 1);

    for (let end = 0; end <= str.length; end++) {
        if (end === str.length || str[end] === ' ') {
            reverseArray(start, end - 1);
            start = end + 1;
        }
    }

    return str.join('');
}

// Example:
const input = 'the sky is blue'.split('');
console.log(reverseWords(input)); 

  
