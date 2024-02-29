const express = require('express');
const app = express();
const port = 3000;
const hw1Router = require('./hw1');
const hw2Router = require('./hw2');
const hw3Router = require('./hw3');

app.set('view engine', 'pug');
app.set('views', '.');
app.use('/hw1',hw1Router);
app.use(hw2Router);
app.use(hw3Router);

app.listen(port,()=>{
    console.log(`Successfully listen to the ${port}`);
})

