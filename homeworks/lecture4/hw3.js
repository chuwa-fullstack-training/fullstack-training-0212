/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here
var Singleton = (function() {
    let instance;
    function createInstance() {
        return new Object();
    }
    return {
        getInstance: function() {     // key-val pair
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // Output: true
