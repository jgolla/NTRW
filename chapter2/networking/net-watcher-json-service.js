"use strict";

const fs = require("fs"),
    net = require("net"),
    fileName = process.argv[2],
    server = net.createServer(function (conneciton) {

        // reporting
        console.log("Subscriber connected");
        conneciton.write(JSON.stringify({type: "watching", file: fileName}) + "\n");

        let watcher = fs.watch(fileName, function() {
            conneciton.write(JSON.stringify({type: "changed", file: fileName, timestamp: Date.now()}) + "\n");
        });

        conneciton.on("close", function() {
            console.log("Subscriber disconnected");
            watcher.close();
        });
    });

if(!fileName) {
    throw Error("No target filename");
}

server.listen(5432, function() {
    console.log("Listening for Subscribers");
});