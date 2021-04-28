const http = require('http');
const os = require('os');
const path = require('path');

http.createServer(function (request, response) {

    response.writeHead(200, {
        'content-type': 'text/html'
    });

    response.write("<h1>System information</h1>");
    response.write("Current user name: " + os.hostname() + "<br>");
    response.write("OS type: " + os.type() + "<br>");
    response.write("System work time: " + os.uptime() / 60 + " minutes" + "<br>");
    response.write("Current work directory: " + path.dirname("Users/markiyanpryima/Desktop/HW11/task1.js") +
        "<br>");
    response.write("Server file name: " + path.basename("Users/markiyanpryima/Desktop/HW11/task1.js"));
    response.end("");

}).listen(5000);

console.log("server running");