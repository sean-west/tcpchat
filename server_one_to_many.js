var net = require('net');

var server = net.createServer();

server.on('connection', function(connection) {
  connection.on('data', function(data) {
    process.stdout.write(data);
  });

  process.stdin.on('data', function (data) {
    connection.write(data);
  });
})

server.listen(3000);
