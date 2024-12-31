const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });

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