// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    const stack = [];
    const tagRegex = new RegExp('<\\/?[\\w\\s="\']+\\/?>', 'g');
    const tags = html.match(tagRegex);

    if (!tags) {
        return true;
    }

    for (const tag of tags) {
        if (tag.startsWith('</')) {
            const openingTag = stack.pop();
            if (!openingTag || openingTag !== tag.substring(2, tag.length - 1)) {
                return false;
            }
        } else if (tag.endsWith('/>')) {
            continue;
        } else {
            stack.push(tag.substring(1, tag.length - 1));
        }
    }

    return stack.length === 0;
}

// Example usage:
console.log(checkValidHTML('<html><head><title>My Title</title></head></html>'));        // Output: true
console.log(checkValidHTML('<html><head><title>My Title</title></head></head></html>'));  // Output: false
console.log(checkValidHTML('<html><head><title>My Title</title></head></html>'));          // Output: true
