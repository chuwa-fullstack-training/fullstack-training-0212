// change http request into promise-based function

const { rejects } = require('assert');
const https = require('https');
const { resolve } = require('path/posix');

// function httpsRequest(url) {
//   const options = {
// }

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
        reject(new Error(`Did not get an OK from the server. Code: ${response.statusCode}`));
        response.resume();
        return;
      }

      let data = '';
      response.on('data', chunk => {
        data += chunk;
      });

      response.on('end', () => {
        try {
          const jsonData = JSON.parse(data);
          resolve(jsonData);
        } catch (e) {
          reject(new Error(e.message));
        }
      });
    });

    request.on('error', err => {
      reject(new Error(`Encountered an error trying to make a request: ${err.message}`));
    });
  });
}

getJSON('https://api.github.com/search/repositories?q=javascript')
  .then(response => console.log(response.items.length)) // output: 30
  .catch(err => console.log(err)); // if you remove options from https.get parameters, you might see an error
