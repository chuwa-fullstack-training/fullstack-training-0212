const express = require('express');
const router = express.Router();
const fs = require('fs'); 



router.get('/dir/:path/:ext', (req, res) => {
 
    
    fs.readdir(req.params.path, (err, files) => { 
        
        if (err) 
            res.send(err);
        else { 
          console.log("\nCurrent directory filenames:"); 
          let response = "";
          files.forEach(file => { 
            
            if(file.indexOf(req.params.ext) !== -1)
            {
                response += "<p>" + file + "</p>";
            }
            
          }) 
        
         
        
          res.send(response);
        } 
      }) 
 
});


router.param('path', function (req, res, next, id) {
    console.log('1' + req.params.path)
    req.params.hahaha = 5;
    next()
  })
  
module.exports = router;