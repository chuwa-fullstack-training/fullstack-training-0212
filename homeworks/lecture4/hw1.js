// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    const stack = [];
    let i = 0;
    const len = html.length;

    while(i < n){
        if(html[i] === '<' && i+1 < n && html[i+1] !== '/'){
            const tagEnd = html.indexOf('>', i+1);
            if(tagEnd === -1){
                return false;
            }
            stack.push(html.substring(i+1, tagEnd));
            i = tagEnd;
        }
        
        else if(html[i] === '<' && i + 1 < n && html[i + 1] === '/') {
            const tagEnd = html.indexOf('>', i + 1);
            if (tagEnd === -1) {
                return false;
            }
            const tagName = html.substring(i + 2, tagEnd);
            if (stack.length === 0 || stack.pop() !== tagName) {
                return false;
            }
            i = tagEnd;
        }
        i++;
    }
    return stack.length === 0;
}