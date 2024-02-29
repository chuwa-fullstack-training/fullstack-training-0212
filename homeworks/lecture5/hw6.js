/**
 * write a function to have an arbitrary number of promises run in sequence
 * and return an array of the results
 * @param {string[]} urls - an array of urls
 * @returns {any[]} - an array of responses
 */
function sequencePromise(urls) {
  const results = [];
  function fetchSequentially(index) {
    if (index < urls.length) {
      const url = urls[index];
      return fetchOne(url).then(response => {
        results.push(response);
        return fetchSequentially(index + 1);
      });
    } else {
      return Promise.resolve(results);
    }
  }

  // Start the chain with the first promise
  return fetchSequentially(0);
}

// option 1
function getJSON(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'request'
      }
    };

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
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(e.message));
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
