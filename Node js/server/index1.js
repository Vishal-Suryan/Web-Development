// Import the Express framework.
// Express is a lightweight, flexible web framework for Node.js that simplifies server creation,
// routing, middleware handling, and request/response processing compared to Node's built-in 'http' module.
const express = require("express");

// Create an Express application instance.
// This 'app' object is essentially your server, but with many built-in features
// such as routing, middleware support, and simplified request handling.
const app = express();

/*
  Route definitions in Express:
  - app.get(path, callback) handles HTTP GET requests to the specified path.
  - The callback receives (req, res) where:
      req → the HTTP request object (contains URL, query params, headers, etc.)
      res → the HTTP response object (used to send data back to the client)
*/

// Handle GET requests to the root path "/"
app.get("/", (req, res) => {
  // Send a text response back to the client
  // Express automatically sets the correct HTTP headers for text
  return res.send("Hello from HomePage");
});

// Handle GET requests to the "/about" path
app.get("/about", (req, res) => {
  // Send another text response
  return res.send("Hello from AboutPage");
});

/*
  Difference from plain Node.js:
  
  In Node.js (without Express), you would do something like:
  
      const http = require("http");
      const myServer = http.createServer((req, res) => {
          if (req.url === "/") { ... }
          else if (req.url === "/about") { ... }
      });
      myServer.listen(8000, ...);

  That requires manual URL parsing, routing, and response handling.
  
  With Express:
  - You just define routes (app.get, app.post, etc.)
  - No manual request parsing is needed
  - It automatically handles headers, status codes, and more
*/

// Start the server on port 8000
// app.listen() is an Express shortcut for creating and starting an HTTP server internally
app.listen(8000, () => console.log("Server started"));
