// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    const tagStack = [];
    const tagRegex = /<(\/?[a-zA-Z][^\s>]*)/g;
    let match;

    while ((match = tagRegex.exec(html)) !== null) {
        const tagName = match[1];
        console.log(tagName);
        if (tagName.startsWith('/')) {
            const opening = tagStack.pop();
            console.log(opening);
            if (!opening || opening !== tagName.substring(1)) {
                return false;
            }
        } else {
            tagStack.push(tagName);
        }
    }
    console.log(tagStack);
    return tagStack.length === 0;
}
