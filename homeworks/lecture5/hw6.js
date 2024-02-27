/**
 * write a function to have an arbitrary number of promises run in sequence
 * and return an array of the results
 * @param {string[]} urls - an array of urls
 * @returns {any[]} - an array of responses
 */
function sequencePromise(urls) {
  const results = [];
  function fetchOne(url) {
    // for `getJSON` function you can choose either from the implementation of hw5 or `fetch` version provided by browser
    // if you use `fetch`, you have to use browser console to test this homework
    return getJSON(url).then(response => results.push(response));
  }
  // implement your code here
  let promise = Promise.resolve();
  urls.forEach(url => {
    promise = promise.then(() => fetchOne(url))
  })
  return promise.then(() => results)
}

// option 1
const https = require('https');

function getJSON(url) {
  // implement your code here
  const options = {
    headers: {
      'User-Agent': 'request'
    }
  };

  return new Promise((resolve, reject) => {
    const request = https.get(url, options, response => {
      if (response.statusCode !== 200) {
        reject(`Did not get an OK from the server. Code: ${response.statusCode}`);
        response.resume();
      }

      let data = '';
      response.on('data', chunk => {
        data += chunk;
      });

      response.on('end', () => {
        try {
          const parsedData = JSON.parse(data);
          resolve(parsedData);
        } catch (e) {
          reject(`Error parsing JSON: ${e.message}`);
        }
      });
    });

    request.on('error', err => {
      reject(`Encountered an error trying to make a request: ${err.message}`);
    });
  });
}

// option 2
// function getJSON(url) {
//     return fetch(url).then(res => res.json());
// }

// test your code
const urls = [
  'https://api.github.com/search/repositories?q=javascript',
  'https://api.github.com/search/repositories?q=react',
  'https://api.github.com/search/repositories?q=nodejs'
];

sequencePromise(urls).then(res => console.log(res));
