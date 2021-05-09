const http=require('http');
const url=require('url');
const static=require('node-static');
const file=new static.Server('.');

function accept(req,res) {
    if (req.url=='data.txt') {
        file.serve(req,res);
    }else
    {
        file.serve(req,res);
    }
}

http.createServer(accept).listen(8080);
console.log("Server running at http://localhost:8080");