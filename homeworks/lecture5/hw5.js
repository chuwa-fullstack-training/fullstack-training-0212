/**
 * write a function to have an arbitrary number of promises run in sequence
 * and return an array of the results
 * @param {string[]} urls - an array of urls
 * @returns {any[]} - an array of responses
 */
 const fetch = require('node-fetch');
 const https = require('https');
 function sequencePromise(urls) {
  const results = [];
  function fetchOne(url) {
    // for `getJSON` function you can choose either from the implementation of hw5 or `fetch` version provided by browser
    // if you use `fetch`, you have to use browser console to test this homework
    return getJSON(url).then(response => results.push(response));
  }
  // implement your code here
  //option 1
  // return urls.reduce((previousPromise, url) => {
  //   return previousPromise.then(() => fetchOne(url));
  // }, Promise.resolve())
  // .then(() => results);



  //option 2
  const promises = urls.map(url => fetchOne(url));

  return Promise.all(promises).then(() => results);
}

// option 1
// function getJSON(url) {
//   // this is from hw5
//   const options = {
//     headers: {
//       'User-Agent': 'request'
//     }
//   };

//   return new Promise((resolve, reject) => {
//     const request = https.get(url, options, response => {
//       let data = '';

//       response.on('data', chunk => {
//         data += chunk;
//       });

//       response.on('end', () => {
//         try {
//           const jsonData = JSON.parse(data);
//           resolve(jsonData);
//         } catch (e) {
//           reject(new Error(e.message));
//         }
//       });
//     });

//     request.on('error', err => {
//       reject(new Error(`Encountered an error trying to make a request: ${err.message}`));
//     });
//   });
// }

// option 2


function getJSON(url) {
  const options = {
    headers: {
      'User-Agent': 'request'
    }
  };

  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Did not get an OK from the server. Code: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      throw new Error(`Error during fetch: ${error.message}`);
    });
}

// test your code
const urls = [
  'https://api.github.com/search/repositories?q=javascript',
  'https://api.github.com/search/repositories?q=react',
  'https://api.github.com/search/repositories?q=nodejs'
];

sequencePromise(urls)
  .then(results => {
    console.log(results);
  })
  .catch(error => {
    console.error(error);
  });
