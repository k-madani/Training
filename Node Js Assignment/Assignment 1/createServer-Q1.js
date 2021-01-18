//Question 1

var http = require('http');
var server = http.createServer(function(req, res){
    console.log(`request was made ${req.url}`);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Create Server example completed.');
});
server.listen(3000, '127.0.0.1');
console.log(`Success, I'am listening from port: 3000.`);
