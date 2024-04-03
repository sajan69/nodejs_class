const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;
    if(url === '/'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Hello World</h1>');
    }

    else if(url.startsWith('/about')) {
        const query = url.split('?')[1]; // name=sajan&age=20
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>About Us</h1>');
    }

    else if(url === '/contact'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Contact Us</h1>');
    }

    else if(url === '/json'){
        res.writeHead(200, { 'Content-Type': 'text/json' });
        res.end(JSON.stringify({ name: 'Sajan', age: 20 }));
    }

    else{
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Page Not Found</h1>');
    }
});
server.listen(3000, 'localhost', () => {
    console.log('Server is running on http://localhost:3000');
});