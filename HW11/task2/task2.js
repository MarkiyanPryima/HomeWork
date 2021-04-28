const http = require('http');
const os = require('os');
const pm = require('./personalmodule');

http.createServer(function (request, response) {

    response.writeHead(200, {
        'content-type': 'text/html'
    });

    response.write("Date of request: " + pm.showDate() + "<br>");
    response.write(pm.Greeting() + ", " + os.hostname());

    response.end();

}).listen(8000);

console.log("server running");