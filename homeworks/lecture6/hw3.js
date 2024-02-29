/**
 * Implement debounce function
 * @param {function} func - The function to be debounced
 * @param {number} delay - The delay in milliseconds
 * @returns {function} - The debounced function
 */
function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

/**
 * Implement throttle function
 * @param {function} func - The function to be throttled
 * @param {number} delay - The delay in milliseconds
 * @returns {function} - The throttled function
 */
function throttle(func, delay) {
  let throttling = false;

  return function (...args) {
    if (!throttling) {
      func.apply(this, args);
      throttling = true;

      setTimeout(() => {
        throttling = false;
      }, delay);
    }
  };
}


