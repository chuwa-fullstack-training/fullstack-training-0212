// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
  // implement your solution here
  const stack = [];
  for (let i = 0; i < html.length; i++) {
    if (html[i] === '<') {
      if (html[i + 1] === '/') {
        const closingTag = html.substring(i + 2, html.indexOf('>', i + 2));
        if (stack.length === 0 || stack.pop() !== closingTag) {
          return false;
        }
      } else {
        const openingTag = html.substring(i + 1, html.indexOf('>', i + 1));
        stack.push(openingTag);
      }
    }
  }

  return stack.length === 0;
}
