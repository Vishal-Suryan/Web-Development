// ==============================
// Express Middleware – Detailed Notes
// ==============================

// 1. What is Middleware?
// ----------------------
// Middleware is a function in Express that has access to:
//  - req (request object)
//  - res (response object)
//  - next (function to move to the next middleware in the stack)
// It can:
//  1. Execute any code.
//  2. Modify req or res.
//  3. End the request-response cycle early.
//  4. Call next() to pass control forward.

// 2. How Requests Flow in Express
// -------------------------------
// Without Middleware:
//   Client → Route Handler → Response
// With Middleware:
//   Client → Middleware(s) → Route Handler → Response
// Middleware decides whether to stop the request or pass it forward.

// 3. Example Scenarios:
// ---------------------
//  - Authentication checks
//  - Data validation
//  - Logging requests
//  - Adding custom properties to req
//  - Pre-processing incoming data

// 4. Multiple Middleware
// ----------------------
// Request flows through middleware in the order they are declared.
// If one ends the cycle, the rest won't run.

// ==============================
// Example Express App with Middleware
// ==============================

const express = require("express");
const fs = require("fs");
const app = express();
// Built-in middleware example: Parses incoming JSON
app.use(express.json());

// Custom Middleware #1 - Logs and passes request forward
app.use((req, res, next) => {
  console.log("Hello from Middleware 1");
  req.myUsername = "Rock"; // Adding custom property
  next(); // Pass to next middleware
});

// Custom Middleware #2 - Logs request to a file, then forwards
app.use((req, res, next) => {
  const logData = `${new Date().toISOString()} ${req.method} ${req.url}\n`;
  fs.appendFile("log.txt", logData, (err) => {
    if (err) console.error("Error writing to log file", err);
    next();
  });
});

// Custom Middleware #3 - Conditional blocking example
app.use((req, res, next) => {
  if (req.query.block === "true") {
    return res.status(403).json({ error: "Request blocked by Middleware 3" });
  }
  next();
});

// Route Handler - Will only run if all middlewares call next()
app.get("/users", (req, res) => {
  console.log("Username from Middleware:", req.myUsername);
  res.json({ message: "All users", userFromMiddleware: req.myUsername });
});

// Start the server
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

// ==============================
// 5. Key Rules:
// -------------
//  - Always call next() if you don’t end the response.
//  - Middleware runs in the order declared.
//  - If you forget to call next() or end the response, request will hang.
//  - Can be used like plugins for modular, reusable code.
// ==============================
