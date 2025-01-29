var net = require("net");

var client = net.connect({ port: 8080 }, '172.23.182.182', function () {
    console.log('Connected to Server.');
});

async function F2 () {
        console.log("Hello from client. This is implementation of F2")
    }

client.on('data', function (data) {
    console.log(data.toString());
    client.end();
});

await F2();

client.on('end', function () {
    console.log('Disconnected from server.');
});
