// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
  // implement your code here
  return Math.max(...list);
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
  // implement your code here
  return list.reverse();
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
  return list.filter((item) => item === element).length >= 2;
}
