import http from 'http';

const port = 3000;

const server = http.createServer((req, res) => {
  // Home page
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the Home Page!');
  } 
  // About page
  else if (req.url === '/about' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('About Page: This is Pascal\'s Node.js server assignment.');
  } 
  // Any other URL (404 error)
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Error: Page not found.');
  }
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});