"use strict";

const fs = require("fs"),
    spawn = require("child_process").spawn,
    fileName = process.argv[2],
    processToSpawn = process.argv[3],
    options = [].slice.call(process.argv, 4);

    options.push(fileName);

if(!fileName) {
    throw "No file name specified";
}

fs.watch(fileName, function() {
    let ls = spawn(processToSpawn, options);
    ls.stdout.pipe(process.stdout);
});

console.log("File: " + fileName);
console.log("Prcess: " + processToSpawn);
console.log("Options: " + options)
