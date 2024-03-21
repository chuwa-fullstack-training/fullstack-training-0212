/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */




// ES5 Singleton
function Singleton() {
    if (Singleton.instance) {
        return Singleton.instance;
    }

    Singleton.instance = this;
}


// ES6 Singleton
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }

        Singleton.instance = this;
    }
}
