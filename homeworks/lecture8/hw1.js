/**
 * Refactor hw1 and hw2 in lecture 7 in Express.js.
 * Requirements:
 * 1. make two routers, one for hw1 and one for hw2;
 * 2. hw1 should be able to handle requests with url params, rather than command-line arguments;
 *  - e.g. http://localhost:3000/hw1/<dir>/<ext>
 *  - `dir` only support one level down from the current repository,
 *    i.e http://localhost:3000/hw1/test/txt.
 *    You don't need to handle the case like http://localhost:3000/hw1/test/test/txt.
 * 3. hw2 should be able to handle requests with query strings like it did in lecture 7;
 */
const express = require('express')
const app = express()
const hw1Router = require('./routers/hw1Router');
const hw2Router = require('./routers/hw2Router');

app.use('/hw1', hw1Router);
app.use('/hw2', hw2Router);



app.listen(3000,() => console.log('hw1.js listening on port 3000!\n' + 
'Server Api:\n'+
'\t(get) /hw1/dir/{directory name}/{extension}: Show all files with the specific extension in the specific directory\n' +
'\t(get) /hw2/parsetime?iso={iso}: Convert the {iso} into Date\n' +
'\t(get) /hw2/unixtime?iso={iso}: Convert the {iso} into unixtime\n'))
