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
  let password;
  return{
    setPassword: function(newPassword) {
    try {
      if (!password) {
        password = newPassword;
      } else {
        throw new Error("Password is already set");
      }
    } catch (error) {
      console.error(error.message);
    }
  },
    checkPassword: function(inputPassword) {
      return password === inputPassword;
    }
  };
}
