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
const app = express();
const port = 3000;
const axios = require('axios');

const fetchResult = (query) => axios.get(`https://hn.algolia.com/api/v1/search?query=${query}&tags=story`);

app.get('/hw2', (req, res) => {
    const { query1, query2 } = req.query;
    const combine = {};
    fetchResult(query1)
    .then((response) => {
        combine[query1] = response.data.hits;
        return fetchResult(query2);
    })
    .then((response) => {
        combine[query2] = response.data.hits;
        res.send(JSON.stringify(combine));
    })
    .catch((err) => {
        console.log('ERORR!!!', err);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}.`));