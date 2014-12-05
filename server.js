var net = require('net');

var connections = [];

var server = net.createServer(function(connection) {
  connection.on('data', function(data) {
    var msg = data.toString();
    console.log(msg);
    connections.forEach(function(elem) {
      if (elem !== connection) {
        elem.write(msg);
      }
    })
  });

  connections.push(connection);
});

server.listen(3000);

process.stdin.on('data', function(data) {
  var msg = data.toString().trim();
  connections.forEach(function(elem) {
    elem.write(msg);
  })
})
