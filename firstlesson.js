var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('Hello here! I just wrote my first Node.js Code!!!!');
}).listen(8080);
