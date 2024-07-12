/* Create a function named concatenate which takes two strings as arguments and returns a single string composed of those two strings without spaces.
For example:

concatenate('foo','bar') should return 'foobar'

concatenate('hello','world ') should return 'helloworld' */


const strConcat= (str1, str2) => str1.trim().concat(str2.trim());