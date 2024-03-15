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

const https = require("https");
const express = require("express");
const PORT = 3000;
const app = express();

function getResult(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        "User-agent": "request",
      },
    };

    https.get(url, options, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        if (data) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error("Error on fetching data"));
        }
      });
    });
  });
}

app.get("/", (req, res) => {
  const query1 = req.params.query1;
  const query2 = req.params.query2;

  const url1 = `https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`;
  const url2 = `https://hn.algolia.com/api/v1/search?query=${query2}&tags=story`;

  return Promise.all([getResult(url1), getResult(url2)])
    .then((values) => {
      res.JSON(values);
    })
    .catch((error) => {
      console.log("An error occurred: " + error);
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
