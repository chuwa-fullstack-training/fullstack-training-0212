/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here

//ES5 implementation
var Singleton = (function() {
    var instance;

    function createInstance(){
        var object = new Object("create a new instance");
        return object;
    }

    return {
        getInstance:function(){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    };
})();
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // Output: true

// ES6 implementation
class Singleton{
    constructor(){
        if(!Singleton.instance){
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
}
const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); // Output: true