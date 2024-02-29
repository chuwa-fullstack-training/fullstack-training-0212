// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    const stack = [];
    let tagStart = html.indexOf('<');

    while(tagStart !== -1){
        let tagEnd = html.indexOf('>', tagStart);
        if(tagEnd === -1) break;

        let tag = html.substring(tagStart+1, tagEnd);

        if(!tag.startsWith('/')){
            stack.push(tag);
        }else{
            let tagName = tag.substring(1); //remove '/'
            if(stack.length === 0 || stack.pop() !== tagName){
                return false;
            }
        }

        tagStart = html.indexOf('<', tagEnd);
    }

    return stack.length === 0;
}
