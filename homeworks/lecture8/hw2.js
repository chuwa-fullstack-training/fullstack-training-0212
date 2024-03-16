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
const https = require('https');

const app = express();
const port = 3000;

app.get('/hw2', (req, res) => {
    const { query1, query2 } = req.query;

    const fetchStory = (query) => {
        return new Promise((resolve, reject) => {
            const url = `https://hn.algolia.com/api/v1/search?query=${query}&tags=story`;
            https.get(url, (response) => {
                let data = '';
                response.on('data', (chunk) => {
                    data += chunk;
                });
                response.on('end', () => {
                    resolve(JSON.parse(data).hits[0]);
                });
            }).on('error', (err) => {
                reject(err);
            });
        });
    };

    Promise.all([
        fetchStory(query1),
        fetchStory(query2)
    ]).then(results => {
        const finalResult = {
            [query1]: {
                "created_at": results[0].created_at,
                "title": results[0].title
            },
            [query2]: {
                "created_at": results[1].created_at,
                "title": results[1].title
            }
        };
        res.json(finalResult);
    }).catch(error => {
        res.status(500).send('Error fetching data');
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});