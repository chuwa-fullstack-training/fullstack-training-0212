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

const express = require("express");
const app = express();

app.get("/hw2", async (req, res) => {
    const { query1, query2 } = req.query;
    let response = await fetch(`https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`);
    let result = await response.json();
    let data = result.hits[0]

    let response2 = await fetch(`https://hn.algolia.com/api/v1/search?query=${query2}&tags=story`);
    let result2 = await response2.json();
    let data2 = result2.hits[0]

    res.json({
        [query1]: {
            created_at: data.created_at,
            title: data.title
        },
        [query2]: {
            created_at: data2.created_at,
            title: data2.title
        }
    });
})

app.listen(3000, () => {
    console.log("Server listening on 3000");
})

