var net = require('net');

var ip = "localhost";
if (process.argv.length === 3) {
  ip = process.argv[2];
}

var connection = net.connect({host: ip, port: 3000});
connection.on('data', function(data) {
  var msg = data.toString();
  console.log(msg);
});

process.stdin.on('data', function (data) {
  var msg = data.toString().trim();
  connection.write(msg);
});
