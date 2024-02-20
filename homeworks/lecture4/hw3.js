/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here

// ES5 Function
function Singleton1() {
    if (Singleton1.instance) {
        return Singleton1.instance;
    }
    return Singleton1.instance = this;
}

// ES6 Class
class Singleton2 {
    constructor() {
        if (Singleton2.instance) {
            return Singleton2.instance;
        }
        return Singleton2.instance = this;
    }
}