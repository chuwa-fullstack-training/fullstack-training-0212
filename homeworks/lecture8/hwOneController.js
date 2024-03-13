const fs = require('fs');
const path = require('path');

module.exports = {
    filterFiles: (req, res) => {
    const directory = req.params.dir;
    const extension = req.params.ext;
    const dirPath = path.join(__dirname, directory);
    fs.readdir(dirPath,(err,files)=>{
        if(err) console.log(err);
        else {
            console.log("Files with extention "+extension);
            files.forEach(file=>{
                if(path.extname(file)==='.'+extension)
                  console.log(file); 
            })
        }
    })



  },

};

