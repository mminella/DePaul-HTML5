var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

app.listen(9595);

function handler (req, res) {
  fs.readFile('/Library/WebServer/Documents/DePaul-HTML5/Session3Deck/clickListeners.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.sockets.on('connection', function (socket) {
  socket.on('clickHappened', function (data) {
    console.log(data);
	socket.broadcast.emit('clickHappened', data);
  });
});