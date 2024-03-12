const express = require('express');
const router = express.Router();


router.get('/parsetime', (req, res) => {
    var date = new Date(req.query.iso)
    console.log(date.toString())
   
    response = JSON.stringify( {
        "minute": date.getMinutes(),
        "hour": date.getHours(),
        "second": date.getSeconds()
    });
    res.send(response);
});


router.get('/unixtime', (req, res) => {

    response = JSON.stringify( {
        "unixtime": Date.parse(req.query.iso)
    });
    res.send(response);
});

module.exports = router;