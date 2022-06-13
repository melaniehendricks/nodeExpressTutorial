
// require http module
const http = require('http');

                                    // callback function
const server = http.createServer((req, res) => {

    // request object: endpoint client is requesting
    if(req.url === '/') {
        res.end('Welcome to our homepage');
    }
    if(req.url === '/about') {
        res.end('Here is our short history');
    }
    
    // default response
    res.end(`
    <h1> Oops! </h1>
    <p>We can't seem to find the page you requested </p>
    <a href="/">Back home</a>`);

    // response object
    //res.write('Welcome to our homepage');
    //res.end();
});

// server listen on port 5000
server.listen(5000);