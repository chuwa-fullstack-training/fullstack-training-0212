/**
 * implement debounce function
 * explain: `func` will be called after `delay` ms. if `func` is called again before `delay` ms, the timer will be reset
 * @example
 * // after 1s, print 'hello'
 * // However, if `printHello` is called again before 1s, the timer will be reset
 * const printHello = () => console.log('hello')
 * const debouncedFn = debounce(printHello, 1000)
 * debouncedFn()
 * debouncedFn() // timer reset to 1s
 * 
 * @param {function} func
 * @param {number} delay
 * @returns {function}
 */
function debounce(func, delay) {
  // your code here
  let timerId;

  return function (...args) {
    // Clear the previous timer
    clearTimeout(timerId);

    // Set a new timer
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

/**
 * implement throttle function
 * explain: `func` will be called every `delay` ms. if `func` is called again before `delay` ms, the call will be ignored
 * @example
 * // after 1s, print 'hello'
 * // However, if `printHello` is called again before 1s, the call will be ignored
 * const printHello = () => console.log('hello')
 * const throttledFn = throttle(printHello, 1000)
 * throttledFn()
 * throttledFn() // ignored
 * 
 * @param {function} func
 * @param {number} delay
 * @returns {function}
 */
function throttle(func, delay) {
  // your code here
  let lastExecutionTime = 0;
  let timeoutId;

  return function (...args) {
    const currentTime = Date.now();

    if (currentTime - lastExecutionTime >= delay) {
      // If enough time has passed since the last execution, call the function
      func.apply(this, args);
      lastExecutionTime = currentTime;
    } else {
      // If called before the delay, ignore the call and clear any existing timeout
      clearTimeout(timeoutId);

      // Schedule the function to be called after the remaining delay
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        lastExecutionTime = Date.now();
      }, delay);
    }
  };
}
