/**
 * write a program that prints a list of files in the given directory, filtered by the extension of the files.
 * The first argument is the directory name and the second argument is the extension filter.
 * Print the list of files (one file per line) to the console.
 *
 * HINTS:
 * 1. Use fs.readdir() method to read the contents of a directory.
 * 2. Use path.extname() method to get the extension of a file. (optional)
 * 3. Use process.argv to get command-line arguments.
 *  - process.argv[0] is the path to the node program
 *  - process.argv[1] is the path to the script file
 *  - process.argv[2] is the first command-line argument
 *    e.g. node hw1.js currentDir txt - process.argv[2] is `currentDir`, process.argv[3] is `txt`
 */

// your code here
const fs = require('fs');
const path = require('path');
function getFileList(directory, extension) {
    fs.readdir(directory, (err, files) => {   
        if (err) {
            console.log(err)
            return;
        }
        const filtered = files.filter(file => path.extname(file) === `${extension}`);   
        //检查文件的扩展名是否与传入的extension相匹配。如果匹配，该文件名将包含在新数组中，否则将被过滤掉
        filtered.forEach(file => {
            console.log(file);
        })
    }) 
}

const directory = process.argv[2]
const extension = process.argv[3]

if (!directory || !extension) {
    console.error('directory extension error')
} else {
    getFileList(directory, extension);
}
