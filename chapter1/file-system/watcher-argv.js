const fs = require("fs"),
    fileName = process.argv[2];

if(!fileName) {
    throw "No file name specified";
}

fs.exists(fileName, function(exists) {
    if(exists) {
        fs.watch(fileName, function() {
            console.log("File " + fileName + " just changed");
        });
    } else {
        console.log(fileName + " does not exist");
    }
});

/*[].forEach.call(process.argv, function(item, index) {
    console.log("process.argv[" + index + "] = " + item);
});*/

console.log("Now watching " + fileName + " for changes ... ");
