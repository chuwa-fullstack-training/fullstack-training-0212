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

    if (arr.length % 2 != 0) { return false; }
    left = 0, right = arr.length - 1;
    while (left < right) {
        if (arr[right].length <= 1) {
            return false;
        }
        if (arr[left] !== arr[right].substring(1)) {
            return false;
        }
        left++, right--;
    }
    return true;
}