var net = require("net");
var ip = require("ip");

var server = net.createServer(function (connection) {
    console.log('Client connected.');
    connection.on('end', function () {
        console.log('Client disconnected.');
    });
    connection.write('Hello World!\n');
    connection.pipe(connection);
    // send data back to connection object which is client
});
server.listen(8080, function () {
    console.log('Server is listening at '+ip.address());
});
