/* Require */
const http  = require(`http`);

/* Tcp:Http */
/* Arguments & Properties */
/* Export Functions */
/* Local Functions */
/* Execution & Test Data */
const server = http.createServer(((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');

}));

server.listen(3000);
/* Exports */