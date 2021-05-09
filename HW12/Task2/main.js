const http=require('http');
const url=require('url');
const static=require('node-static');
const file=new static.Server('.',{cache:0});

function accept(req,res) {
    if (req.url=='books.json') {
        file.serve(req,res);
    }else
    {
        file.serve(req,res);
    }
}

http.createServer(accept).listen(5000);
console.log("Server running at http://localhost:5000");