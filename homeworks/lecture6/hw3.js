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
   /**
   * Store a timeoutId, after func executed if timeoutId is not null means there is a timer, clean the timer and make a new one
   */
  var timeoutId = null
  return (func)=>
  {
    if(timeoutId !== null)
    {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(()=>{
      func()
    },delay)
  }
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
  /**
   * Store a timeoutId, after func executed, change timeoutId to null, if timeoutId is not null means the func has not been run yet, then return
   */
  var timeoutId = null
  return (func)=>
  {
    if(timeoutId === null)
    {
      timeoutId = setTimeout(()=>{
        func()
        timeoutId = null;
      },delay)
    }
  
  }
}
