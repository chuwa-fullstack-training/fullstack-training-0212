// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
  // implement your solution here
  const stack = [];
  const openingTag = /<([^/>]+)>/g;
  const closingTag = /<\/([^/>]+)>?/g;
  let match;

  while ((match = openingTag.exec(html)) !== null) {
    stack.push(match[1]);
  }
  while ((match = closingTag.exec(html)) !== null) {
    if (stack.length === 0) return false;
    if (stack[stack.length - 1] === match[1]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
}
