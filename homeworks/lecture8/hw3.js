/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const express = require('express');
const path = require('path');
const { route } = require('./hw1');
const router = express.Router();


router.get('/',(req,res)=>{
    res.send("This is the home page");
});

router.get('/about',(req,res)=>{
    res.send("This is the about page");
});

router.get('/home.html', (req, res) => {
    res.render('view', { query: req.query });
});

router.post('/create-post',express.urlencoded({ extended: true }),(req,res)=>{
    res.redirect(`/home.html?${new URLSearchParams(req.body).toString()}`);
})

module.exports = router;