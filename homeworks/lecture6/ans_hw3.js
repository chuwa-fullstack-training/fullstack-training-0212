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
    let timeoutId;

    return function () {
        const context = this;
        const args = arguments;
  
        clearTimeout(timeoutId);
  
        timeoutId = setTimeout(function () {
            func.apply(context, args);
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
    let lastCallTime = 0;

    return function () {
        const context = this;
        const args = arguments;
        const currentTime = Date.now();
  
        if (currentTime - lastCallTime >= delay) {
            func.apply(context, args);
            lastCallTime = currentTime;
        }
    };
  }
  