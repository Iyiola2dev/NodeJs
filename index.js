const http = require('http');
http.createServer((req, res) => {

    //Send the HTTP header
    // HTTP Status: 200 : Ok
    //COntent Type: text/plain
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Send the response body as "Hello World"
    res.write('<h1>Hello world</h1>')

    //This is to end a response
    res.end();
}).listen(3000)


console.log("server is running on port http://localhost:3000/");