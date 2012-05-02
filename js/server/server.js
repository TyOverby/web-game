var app = require('http').createServer(handler)
, io = require('socket.io').listen(app)
, fs = require('fs')

app.listen(8080);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
      function (err, data) {
        if (err) {
          res.writeHead(500);
          return res.end('Error loading index.html');
        }

        res.writeHead(200);
        res.end(data);
      });
}

io.set('log level',1);

var connections = [];

io.sockets.on('connection', function (socket) {
  connections.push(socket);

  socket.emit('welcome', { global: 'Welcome!' });

  socket.on('name',function (data){
    socket['__name'] = data.name;
  });
  socket.on('msg', function (data) {
    data.from = socket['__name'];
    console.log(data);
    broadcast(data);
  });

  socket.on('disconnect',function(){
    remove(socket);
  });
});

function remove(socket){
  for(var i=0;i<connections.length;i++){
    var s = connections[i];

    if(socket.id===s.id){
      connections.splice(i,1);
    }
  }
}
function broadcast(message){
  for(var i=0; i<connections.length;i++){
    var con = connections[i];

    con.emit('msg',message);
  }
}
