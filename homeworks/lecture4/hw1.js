// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
  // implement your solution here
  let stack = [];
  let regex = /<(\/?[a-zA-Z][^\s>]*)>/g;
  let match = html.match(regex);

  for (let tag of match) {
    if (tag.startsWith("</")) {
      let openTag = stack.pop();
      // console.log(openTag);
      if (!openTag || openTag.slice(1) !== tag.slice(2)) {
        return false;
      }
    } else {
      stack.push(tag);
    }
  }

  return stack.length === 0;
}

console.log(
  checkValidHTML("<html><head><title>My Title</title></head></html>")
);
