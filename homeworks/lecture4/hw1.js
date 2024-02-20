// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    let stack = [];
    let tagRegEx = /<\/?[^>]+>/g;
    let match;

    while ((match = tagRegEx.exec(html)) !== null) {
        let tag = match[0];

        if (tag[1] !== '/') {
            // Opening tag
            stack.push(tag);
        } else {
            // Closing tag
            let lastTag = stack.pop();
            if (!lastTag || tag.slice(2, -1) !== lastTag.slice(1, -1)) {
                // Tags do not match
                return false;
            }
        }
    }

    // Check if any tags are left unpaired
    return stack.length === 0;
}


console.log(checkValidHTML("<html><head><title>My Title</title></head></head></html>"));