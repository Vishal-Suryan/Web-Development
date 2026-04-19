const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req, "req");
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node Js.");
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
