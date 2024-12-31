const http = require('http');

const server = http.createServer((req, res) => {
  // Keep the connection alive indefinitely
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Connection': 'keep-alive'
  });

  // Simulate a long-running process
  let count = 0;
  const interval = setInterval(() => {
    count++;
    console.log(`Count: ${count}`);
    if (count === 10) {
      clearInterval(interval);
      res.end('Hello World!');
    }
  }, 1000);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});