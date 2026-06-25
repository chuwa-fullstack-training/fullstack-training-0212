Mock interview I：

BQ
1. Prefer FE/BE?
What's your typical day

Technical

1.  Why you like/use React?
    What is redux? Do you know thunk? When to use Redux Thunk?
    Scale - How do you handle large numbers of users? (How to increase exisiting performance of the react application)
    Server side rendering VS client side rendering 
    Testing experience
    CSS question

2. 
const myPromise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timeStart");
    resolve("success");
    console.log("timeEnd");
  });
  console.log(2);
});
myPromise.then(res => {
  console.log(res);
})
console.log(4);

3.
Using react to implement an UI with calling API
API: https://api.quotable.io/random
You need to render content and author when clicking a button.
Every time when you click the button which will re-render the UI.

4.
JS coding:  Find First Non repeated char from string input:
const str = "abababdefefefzwwwwttttdk"
output： z




Mock interview II：

BQ
1. ask about the last project，team collaboration，why choose react，bad & good experinece 

Technical

1. Explaining more the Testing framework you using? And how do you do unit test?

ES5 vs ES6 (short)

Does browser understand ES6 directly? Then what extra step to make browser understand it?

what are some new features in HTML5

jQuery vs React

why to use redux？flow？what is reducer？

2. Give you an api(https://jsonplaceholder.typicode.com/users) which has a lot of user information and each user has its own id number. Create a text box and a button. You have to input id into the text box, after you push the button, you need to display the username, email address and zip code.(Use Typescript (?)/ Redux/ Redux Thunk ) - less requirement

3.
Given an array, such as [2, 4, 1, 6, 5] return another array that each index saves the product for all the other elements rather than the one at the same index (e.g. [120, 60, 240, 40, 48] ). Without using Division, Need to solve in O(n) TC.



Mock interview III：

BQ
1. Last project introduction. daily stand up. 
Scale - how many users use it? How do you handle large numbers of users?

Technical
  1. How do you resolve Frontend latency?

  2. Talk about the structure of Redux/thunk | explain double callback () => dispatch => {

  }

  4. What is Event loop?

  5. What is falsy value in Js, is empty array a falsy value?

  [], {} == true