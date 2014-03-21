const net = require("net"),
    server = net.createServer(function(connection) {
        // use connection
    });

server.listen(5432);