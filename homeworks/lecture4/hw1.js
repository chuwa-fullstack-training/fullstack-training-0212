// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
  // implement your solution here
  const stack = [];
  const tags = html.match(/<[^>]*>/g);
  console.log(tags);
  for (let tag of tags) {
    if (tag.startsWith("</")) {
      const openingTag = stack.pop();
      if (!openingTag || openingTag !== tag.slice(2, -1)) {
        return false;
      }
    } else if (!tag.endsWith("/>")) {
      stack.push(tag.slice(1, -1));
    }
  }
  return stack.length === 0;
}

console.log(
  checkValidHTML("<html><head><title>My Title</title></head></html>")
);
console.log(
  checkValidHTML("<html><head><title>My Title</title></head></head></html>")
);
console.log(
  checkValidHTML("<html><head><title>My Title</title></head></html>")
);
