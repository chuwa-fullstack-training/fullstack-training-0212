// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    const arr = [];
    let left = 0, right = 0;
    while (right < html.length) {
        if (html[right] === '<') {
            left = right + 1;
        } else if (html[right] === '>') {
            arr.push(html.substring(left, right));
        }
        right++;
    }

    const stack = [];
    for (let tag of arr) {
        if (tag[0] !== '/') {
            stack.push(tag);
        } else {
            if (stack.length == 0) {
                return false;
            }
            let top = stack.pop();
            if (top !== tag.substring(1)) {
                return false;
            }
        }
    }
    return true;
}