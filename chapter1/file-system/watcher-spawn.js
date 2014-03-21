"use strict";

const fs = require("fs"),
    spawn = require("child_process").spawn,
    fileName = process.argv[2];

if(!fileName) {
    throw "No file name specified";
}

fs.watch(fileName, function() {
    let ls = spawn("ls", ["-lh", fileName]);
    ls.stdout.pipe(process.stdout);
});

console.log("Now watching " + fileName + " for changes ... ");
