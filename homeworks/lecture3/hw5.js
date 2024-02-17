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
    var m_password;

    function checkPassword(password) {
        return m_password == password;
    }

    function setPassword(password) {
        if (m_password) {
            throw new Error("Cannot reset password");
        }
        m_password = password;
    }
    
    return {
        checkPassword: checkPassword,
        setPassword: setPassword,
    };
}

const user = new User();
user.setPassword('123456');
user.checkPassword('123456'); // true
user.checkPassword('123'); // false
user.password; // undefined
user.setPassword('123'); // Error
user.checkPassword('123'); // false
user.password; // undefined
