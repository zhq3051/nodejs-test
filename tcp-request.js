var net = require('net');

var server = net.createServer(function (socket) {
    //new connection
    socket.on('data', function (data) {
        socket.write('nice to meet you: ' + data);
    });

    socket.on('end', function () {
        console.log('disconnect');
    });

    socket.write('welcome to nodejs tutorial: \n');
});

server.listen(8124, function () {
    console.log('server bound');
});