let http = require('http')
http.createServer(function (req,res){
    res.end('1')
}).listen(5000)