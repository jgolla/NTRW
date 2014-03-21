const fs = require("fs");
fs.writeFile("target.txt", 'a witty messge', function(err) {
    if(err) {
        throw err;
    }

    console.log("File saved!!");
});