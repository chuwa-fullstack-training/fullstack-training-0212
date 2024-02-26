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
  let timer;
  return (...args) => {
    // clear the last setTimeout
    clearTimeout(timer);
    // create a new setTimeout
    timer = setTimeout(() => {
      func();
      console.log(delay)
    }, delay);
  
  }
}
const printHello = () => console.log('hello')
const debouncedFn = debounce(printHello, 10000);
debouncedFn(); // After 1s, prints 'hello'
setTimeout(() => console.log("?"), 1000);
debouncedFn(); // Timer reset to 1s
setTimeout(() => console.log("?"), 1000);
debouncedFn(); // Timer reset to 1s

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
 * @returns {function}\
 * 
 */

func = () => console.log('hello')
function throttle(func, delay) {
  // your code here
  let waiting = false;
  return (...args) => {
    if (!waiting) {
      waiting = true;
      setTimeout(() => {
        func();
        waiting = false;
      }, delay);
    }else{
      console.log("ignored")
    }
  }
}

const throttledFn = throttle(func, 1000);
throttledFn(); // After 1s, prints 'hello'
throttledFn(); // Ignored
throttledFn(); // Ignored