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
const router = express.Router();
const url = require('url');
const app = express();
const fetch = require('node-fetch');
router.get('/hw2', (req, res) => {
  
  if(req.query.query1 === undefined || req.query.query2 === undefined) {
    res.status(500).json({ error: 'failed' });
    return;
  }
  
  const one = `https://hn.algolia.com/api/v1/search?query=${req.query.query1}&tags=story`;
  const two = `https://hn.algolia.com/api/v1/search?query=${req.query.query2}&tags=story`;
  

  const fetchAndFormat = (url) => {
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        const firstResult = data.hits[0];
        if (firstResult) {
          const queryValue = new URL(url).searchParams.get("query");
          const formatted = {
            [queryValue]: {
              title: firstResult._highlightResult.title.value,
              created_at: firstResult.created_at,
            },
          };
          return formatted;
        } else {
          throw new Error('cannot find ');
        }
      });
  };

  Promise.all([fetchAndFormat(one), fetchAndFormat(two)])
    .then(results => {
      res.json(results);
    })
    .catch(error => {
      console.error('wrong:', error);
      res.status(500).json({ error: 'failed' });
    });


});


app.use('/',router);
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


