// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    const tagRegex = /<\/?([a-zA-Z]+)[^>]*/g;
    // const matches = html.match(tagRegex);
    // console.log('matches:', matches)

    const stack = [];
    let match;
    while ((match = tagRegex.exec(html)) !== null) {
        // console.log(match)
        const [tag, tagName] = match;
        if (!tag.startsWith('</')) {
            stack.push(tagName);
        } else {
            if (stack.length == 0 || stack.pop() !== tagName) {
                return false;
            }
        }
    }
    return stack.length == 0;
}

console.log(checkValidHTML('<html><head><title>My Title</title></head></html>'))
console.log(checkValidHTML('<html><head><title>My Title</title></head></head></html>'))
console.log(checkValidHTML('<html><head><title>My Title</title></head></html'))