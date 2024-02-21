/**
 * Immediately Invoked Function Expression (IIFE)
 */
// Namespace function for utilities
var Utils = (function () {
  // 这样子count被作为Private variable保护起来
  var count = 0;

  // Private function
  function incrementCount() {
    count++;
  }

  // Public function
  function getCount() {
    return count;
  }

  // Expose public functions
  return {
    incrementCount: incrementCount,
    getCount: getCount
  };
})();

// 与下面对比
// var util1 = Utils(...);

// Using the namespace functions
Utils.incrementCount();
Utils.incrementCount();
console.log(Utils.getCount()); // Output: 2
