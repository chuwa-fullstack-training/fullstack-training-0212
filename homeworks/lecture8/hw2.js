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
const https = require('https');
const express = require('express')
const app = express()
const port = 3000;

function getJSON(url) {
    // this is from hw5
    return new Promise((resolve,reject)=>
    {
         const options = {
           headers: {
             'User-Agent': 'request'
           }
         };
         const request = https.get(url, options, response => {
           if (response.statusCode !== 200) {
             console.error(
               `Did not get an OK from the server. Code: ${response.statusCode}`
             );
             response.resume();
           }
      
           let data = '';
           response.on('data', chunk => {
             data += chunk;
           });
           response.on('end', () => {
             try {
               // When the response body is complete, we can parse it and log it to the console
               //console.log(JSON.parse(data));
               console.log("resolved");
               resolve(JSON.parse(data))
         
             } catch (e) {
               // If there is an error parsing JSON, log it to the console and throw the error
               reject(new Error(e.message));
             }
           });
         });
    }
    
    )
}

app.get('/', (req, res) => {
    console.log("query1:" + req.query.query1 + "\nquery2:" + req.query.query2)
    let url1 = "https://hn.algolia.com/api/v1/search?query="+req.query.query1 +"&tags=story";
    let url2 = "https://hn.algolia.com/api/v1/search?query="+req.query.query2 +"&tags=story";
    let result = [] 
    getJSON(url1).then(data=>result.push(data)).then(getJSON(url2)).then((data)=>{
        result.push(data)
        res.send(JSON.stringify(result))
    })
  
});


app.listen(port,() => console.log(`hw2.js listening on port ${port}!\n` + 
'Server Api:\n'+
'\t(get) /?query1={query1}&query1={query1}: Fetch data from external Api with query1 and query2\n'
))