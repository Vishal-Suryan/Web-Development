// Import the built-in 'http' module to create an HTTP server
const http = require("http");

// Import the built-in 'fs' (File System) module to read/write files
const fs = require("fs");

// Import the built-in 'url' module to parse request URLs
const url = require("url");

// Create an HTTP server that listens for incoming requests
const myServer = http.createServer((req, res) => {
  // Prepare a log entry with current timestamp and requested URL
  const log = `${Date.now()}:${req.method} ${req.url} New Req Received\n`;

  // Parse the request URL into its components (pathname, query, etc.)
  // The second argument 'true' makes it parse the query string into an object
  const myUrl = url.parse(req.url, true);

  // Log the parsed URL object to the console for debugging
  console.log(myUrl);

  // Append the log message to 'log.txt' (creates file if it doesn't exist)
  fs.appendFile("log.txt", log, (err, data) => {
    // Handle routing based on the path of the request
    switch (myUrl.pathname) {
      case "/": // Homepage route
        res.end("Homepage");
        break;

      case "/about": // About page route
        // Retrieve the 'myname' query parameter from the URL
        const username = myUrl.query.myname;
        // Respond with a personalized greeting
        res.end(`Hi ${username}`);
        break;

      default: // All other paths (404 Not Found)
        res.end("Error 404 not found");
    }
  });
});

// Start the server and make it listen on port 8000
// The callback runs once the server starts successfully
myServer.listen(8000, () => console.log("Server Started"));
