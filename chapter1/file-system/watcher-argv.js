const fs = require("fs"),
    fileName = process.argv[2];

if(!fileName) {
    throw "No file name specified";
}

fs.watch(fileName, function() {
    console.log("File " + fileName + " just changed");
});

/*[].forEach.call(process.argv, function(item, index) {
    console.log("process.argv[" + index + "] = " + item);
});*/

console.log("Now watching " + fileName + " for changes ... ");
