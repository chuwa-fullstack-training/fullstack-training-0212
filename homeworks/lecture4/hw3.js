/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here
let instance;
class Singleton {
    constructor() {
        if(!instance) {
            instance = this;
        }
        return instance;
    }
}
const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2);