/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const port = 3000;
app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: false }));
const submissions = [];
app.get('/',  (req, res) => {
    res.end('this is the home page');   
});
app.get('/about',  (req, res) => {
    res.end('this is the about page'); 
});

app.use((req, res, next) => {
    const reqUrl = req.originalUrl; 
    const searchString = "/home.html";
    if (reqUrl.startsWith(searchString)) {
        res.render('index', { submissions });
    } else {
        next();
    }
});

app.post('/create-post',(req,res)=>{
    const{title,content} = req.body;
    submissions.push({title,content});
    res.redirect('/home.html');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
