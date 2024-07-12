/* Create a function named convertHexadecimal which takes as an argument a string representing a hexadecimal integer (base-16) and returns a decimal integer (base-10).
For example:

convertHexadecimal('10') should return 16

convertHexadecimal('af') should return 175 */

/* const convertHexadecimal= (str) =>{
    let answer=0;
    for(let i=0;i<str.length;i++){
        let ch=str.charAt(i);
        if(ch>='0'&&ch<='9'){
            answer=answer*16+ch-'0';
        }else{
            answer+=answer*16+ch-'a';
        }
    }
    return answer;
} */

const convertHexadecimal = (str) => {
    let answer = 0;
    for (let i = 0; i < str.length; i++) {
        let ch = str.charAt(i);
        if (ch >= '0' && ch <= '9') {
            answer = answer * 16 + (ch - '0');
        } else if (ch >= 'a' && ch <= 'f') {
            answer = answer * 16 + (ch.charCodeAt(0) - 'a'.charCodeAt(0) + 10);
        } else if (ch >= 'A' && ch <= 'F') {
            answer = answer * 16 + (ch.charCodeAt(0) - 'A'.charCodeAt(0) + 10);
        } else {
            throw new Error('Invalid hexadecimal character');
        }
    }
    return answer;
}