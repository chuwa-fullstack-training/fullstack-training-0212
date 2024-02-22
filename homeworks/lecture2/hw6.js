// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
  // implement your code here
  return Math.max(...list);
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
  // implement your code here
  let left = 0,
    right = list.length - 1;
  while (left < right) {
    let temp = list[left];
    list[left] = list[right];
    list[right] = temp;
    left++;
    right--;
  }
  return list;
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
  // implement your code here
  let count = 0;
  for (let num of list) {
    if (num === element) {
      count++;
      if (count > 1) {
        return true;
      }
    }
  }
  return false;
}
