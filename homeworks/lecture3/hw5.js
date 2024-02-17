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
  let password = "";
  return {
    setPassword: function (newPassword) {
      if (password === "") {
        password = newPassword;
      } else {
        return "Error";
      }
    },
    checkPassword: function (inputPassword) {
      return inputPassword === password;
    },
  };
}

const user = new User();
user.setPassword("123456");
console.log(user.checkPassword("123456"));
console.log(user.checkPassword("123"));
console.log(user.password);
user.setPassword("123");
console.log(user.checkPassword("123"));
console.log(user.password);
