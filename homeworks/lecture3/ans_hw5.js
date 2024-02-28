/** Implement a User class with a private variable #password (Use closure, not # syntax).
 * The class should have methods to setPassword and checkPassword.
 */


function User() {
    let password;

    return {
        setPassword: function (newPassword) {
            if (!password) {
                password = newPassword;
            } else {
                throw new Error('Already existed.');
            }
        },
        checkPassword: function (inputPassword) {
            return password === inputPassword;
        }
    };
}

//test answers
const user = new User();
user.setPassword('123456');
console.log(user.checkPassword('123456')); // true

console.log(user.checkPassword('123')); // false

console.log(user.password); // undefined

//console.log(user.setPassword('123')); // Error

console.log(user.checkPassword('123')); // false

console.log(user.password); // undefined

