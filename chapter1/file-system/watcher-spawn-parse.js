"use strict";

const fs = require("fs"),
    spawn = require("child_process").spawn,
    fileName = process.argv[2];

if(!fileName) {
    throw "No file name specified";
}

fs.watch(fileName, function() {
    let ls = spawn("ls", ["-lh", fileName]),
        output = "";

    ls.stdout.on("data", function(chunk) {
        output += chunk.toString();
    });

    ls.on("close", function() {
        let parts = output.split(/\s+/);
        console.dir([parts[0], parts[4], parts[8]])
    });

});

console.log("Now watching " + fileName + " for changes ... ");
