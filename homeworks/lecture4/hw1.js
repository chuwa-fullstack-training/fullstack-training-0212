// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html> - true

function checkValidHTML(html) {
    // implement your solution here
    let stack = [];
    let curTag = "";
    let start = false;
    let i = 0;
    while(i < html.length) {
        let ch = html[i];
        // console.log(ch);
        if(ch === '<' && (i+1) < html.length && html[i+1] != '/') {
            tag = '';
            start = true;
            i++;
            continue;
        }
        if(ch === '>' && start) {
            stack.push(curTag);
            curTag = "";
            start = false;
            i++;
            continue;
        }
        if(start){
            curTag += ch;
            i++;
            continue;
        }
        if(html.slice(i, i+2) === "</") {
            let j = i+2;
            let backTag = "";
            while(j < html.length && html[j] != '>') {
                backTag += html[j];
                j++;
            }
            console.log(backTag);
            if(stack.pop() != backTag) {
                return false;
            }
            i = j;
        }
        i++;
    }
    return stack.length === 0;
}
let html1 = '<html><head><title>My Title</title></head></html>';
let html2 = '<html><head><title>My Title</title></head></head></html>';
console.log(checkValidHTML(html1));