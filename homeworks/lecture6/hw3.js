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
function debounce(func, delay) {  // 点击一次刷新一次，重新发请求
  // your code here
  let timer;  
  return function (...args) {
  //When the returned function is called, it sets a timer using setTimeout.
    clearTimeout(timer);  // to clear the existing timer, if any
    //If the returned function is called again before the timer expires, 
    //the previous timer is cleared, and a new timer is set.
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay)
  }
}
const printHello = () => console.log('hello')
const debouncedFn = debounce(printHello, 1000)
debouncedFn()
debouncedFn() // timer reset to 1s


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
function throttle(func, delay) {  //点了只发送一次，不刷新
  // your code here
  let isThrottle = false;
  //When the returned function is called, it checks if it's currently throttled (isThrottled)
  return function(...args) {
    if (!isThrottle) {
      func.apply(this, args);
      isThrottle = true;
      
      // to reset isThrottled back to false after the specified delay
      setTimeout(() => {
      isThrottle = false;
      }, delay); 
  //ensures that the func is called at most once during every delay ms. 
  //Additional calls within the delay are ignored.
    } else {
      console.log('ignored')
    }
  }
}
const printHello = () => console.log('hello')
const throttledFn = throttle(printHello, 1000)
throttledFn()
throttledFn() // ignored
setTimeout(() => throttledFn(), 1001)
