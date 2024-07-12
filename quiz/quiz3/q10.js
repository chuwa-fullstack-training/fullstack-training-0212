/* Create a function named removeVowels which takes a string as an argument and returns that string with all vowels removed.
Vowels are considered the following characters: a, e, i, o, u, A, E, I, O, U

For example:

removeVowels('Hello World') should return 'Hll Wrld'

removeVowels('FOOBAR') should return 'FBR' */

const removeVowels = (str)=>{
    const vowels= new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    var ans='';
    for(let i=0;i<str.length;i++){
        let ch= str.charAt(i);
        if(!vowels.has(ch)){
            ans+=ch;
        }
    }
    return ans;

}