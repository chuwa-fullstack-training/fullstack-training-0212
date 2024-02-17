/** Implement a User class with a private variable #password (Use closure, not # syntax).
 * The class should have methods to setPassword and checkPassword.
 * 
 * Example:
 * const user = new User();
 * user.setPassword('123456');
 * user.checkPassword('123456'); // true
 * user.checkPassword('123'); // false
 * user.password; // undefined
 * user.setPassword('123'); // Error
 * user.checkPassword('123'); // false
 * user.password; // undefined
 */
function User() {
    // implement here
    let password = '';

    function setPassword(text){
        if(!password) password = text;
        else console.log('Error');
    }

    function checkPassword(text){
        console.log(text === password);
        return text === password;
    }

    return {
        setPassword:setPassword,
        checkPassword: checkPassword
    }
}
const user = new User();
user.setPassword('123456');
user.checkPassword('123456'); // true
user.checkPassword('123'); // false
user.password; // undefined
user.setPassword('123'); // Error
user.checkPassword('123'); // false
user.password; // undefined