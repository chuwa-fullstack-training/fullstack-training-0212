/**
 * https://hn.algolia.com/api
 *
 * write a router function that takes two query parameters: query1 and query2
 * and returns the partial result from the following query in order:
 * https://hn.algolia.com/api/v1/search?query=query1&tags=story
 * https://hn.algolia.com/api/v1/search?query=query2&tags=story
 *
 * e.g. http://localhost:3000/hw2?query1=apple&query2=banana
 *
 * result from https://hn.algolia.com/api/v1/search?query=apple&tags=story:
 * {
 *  "hits": [
 *   {
 *   "created_at": "2020-11-12T21:00:12.000Z",
 *   "title": "macOS unable to open any non-Apple application",
 *   ...
 *   }
 * ]}
 * 
 * result from https://hn.algolia.com/api/v1/search?query=banana&tags=story:
 * {
 *  "hits": [
 *   {
 *   "created_at": "2010-06-14T12:54:07.000Z",
 *   "title": "Banana equivalent dose",
 *   ...
 *   }
 * ]}
 * 
 * final result from http://localhost:3000/hw2?query1=apple&query2=banana:
 * {
 *   "apple":
 *   {
 *     "created_at": "2020-11-12T21:00:12.000Z",
 *     "title": "macOS unable to open any non-Apple application"
 *   },
 *  "banana":
 *  {
 *   "created_at": "2010-06-14T12:54:07.000Z",
 *   "title": "Banana equivalent dose"
 *  }
 * }
 */

const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.get('/hw2', async (req, res) => {
  const { query1, query2 } = req.query;
  try {
    // Perform both searches in parallel
    const responses = await Promise.all([
      fetch(`https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(query1)}&tags=story`),
      fetch(`https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(query2)}&tags=story`)
    ]);

    // Await both JSON responses
    const [data1, data2] = await Promise.all(responses.map(response => response.json()));

    // Extract the first hit from each query result or null if no hits
    const result1 = data1.hits.length > 0 ? data1.hits[0] : null;
    const result2 = data2.hits.length > 0 ? data2.hits[0] : null;

    // Create and send the final result object
    const finalResult = {
      [query1]: result1 ? { created_at: result1.created_at, title: result1.title } : 'No result',
      [query2]: result2 ? { created_at: result2.created_at, title: result2.title } : 'No result'
    };

    res.json(finalResult);
  } catch (error) {
    console.error('Failed to fetch data:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

