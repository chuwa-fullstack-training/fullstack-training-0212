// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    
    const stack = [];
    const tagRegex = /<\s*\/?\s*([a-zA-Z][^\s>]*)\s*>/g;
    let match;

    while ((match = tagRegex.exec(html)) !== null) {
        const tag = match[1];

        if (tag.startsWith('/')) {
            // Closing tag
            const openingTag = stack.pop();

            if (!openingTag || openingTag !== tag.substring(1)) {
                return false; // Mismatched closing tag
            }
        } else {
            // Opening tag
            stack.push(tag);
        }
    }

    return stack.length === 0; // If stack is empty, all tags are correctly paired
 
}