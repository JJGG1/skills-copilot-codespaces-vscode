// Create web server
const http = require('http');

const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content-Type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body as "Hello, World!"
  res.end('Hello, World!\n');
});

// Listen on port 3000
server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});
