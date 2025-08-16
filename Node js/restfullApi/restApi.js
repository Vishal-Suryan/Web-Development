// RESTful API Notes
/**
 * Rules:
 *
 * 1) Clients send requests, and servers send responses.
 *    - Communication follows the request–response cycle.
 *
 * 2) Server–Client Architecture:
 *    - Server and client are separate, independent entities (often on different machines).
 *    - Each should work without depending on the other's internal logic.
 *
 * 3) Server-Side Rendering (SSR):
 *    - Server generates HTML and sends it directly to the client.
 *    - Preferred when content is always going to be rendered in a browser.
 *
 * 4) Client-Side Rendering(CSR):
 *      JSON for Data Exchange:
 *    - Modern APIs usually send data in JSON format.
 *    - JSON is lightweight, easy to parse, and cross-platform friendly.
 *    - In the past, XML was common, but JSON is now preferred.
 *
 * 5) Respect HTTP Methods:
 *    - GET → Retrieve data
 *    - POST → Create new resource
 *    - PATCH → Partially update existing resource
 *    - PUT → Fully replace existing resource
 *    - DELETE → Remove resource
 *    - Always use methods according to their intended purpose.
 */
// Import the Express framework
const express = require("express");
const app = express();
const fs = require("fs");
// Define the port number for the server
const PORT = 8000;
app.use(express.urlencoded({ extended: false }));
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/practice")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    jobTitle: {
      type: String,
    },
    gender: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);
app.post("/api/users", async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    console.log(body);
    return res
      .status(400)
      .json({ msg: "All Required fields are required...." });
  }
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    jobTitle: body.job_title,
    gender: body.gender,
  });
  console.log(result);
  return res.status(201).json({ msg: "success" });
});
app.get("/users", async (req, res) => {
  const allDbUsers = await User.find({});
  const html = `
    <ul>
        ${allDbUsers.map((user) => `<li>${user.firstName}</li>`).join("")}
    </ul>
    `;
  res.send(html); // Send HTML string as response
});
app
  .route("/api/users/:id")
  .get(async (req, res) => {
    // GET specific user by ID
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "user not found" });
    return res.json(user);
  })
  .patch(async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
    return res.json({ status: "success" });
  })
  .delete(async (req, res) => {
    await User.findByIdAndUpdate(req.params.id);
    return res.json({ status: "success" });
  });
// ==============================
// Routes Overview (REST API - JSON)
// ==============================
/**
 * Task - Build a REST API that serves JSON and HTML:
 *
 * 1) GET  /api/users       -> Return all users in JSON format
 *    GET  /users           -> Render a list of users as an HTML document
 * 2) GET  /api/users/:id   -> Return a specific user by ID
 * 3) POST /api/users       -> Create a new user
 * 4) PATCH /api/users/:id  -> Update certain fields of a user by ID
 * 5) DELETE /api/users/:id -> Delete a user by ID
 */

// Import mock user data from a JSON file
const users = require("./MOCK_DATA.json");

// ==============================
// 1) GET all users in JSON format
// ==============================
app.get("/api/users", (req, res) => {
  return res.json(users); // Send JSON array of users
});

// ==============================
// 1) GET all users in HTML format
// ==============================
app.get("/users", (req, res) => {
  // Create an unordered list of user first names using template literals
  const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
  res.send(html); // Send HTML string as response
});

// Start the server and listen on the defined port
app.listen(PORT, () => console.log("Server Started"));

// =============================================
// 2) GET a specific user by ID (dynamic params)
// =============================================
// Example: GET /api/users/1 will return the user with ID 1
// ":id" in the path is a dynamic variable accessible via req.params.id
// app.get("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id); // Convert ID from string to number
//   const user = users.find((user) => user.id === id); // Find user by ID
//   return res.json(user); // Send user data as JSON
// });

// ==================================
// 3) POST - Create a new user
// ==================================
app.post("/api/users", (req, res) => {
  const body = req.body;
  const newUser = { ...body, id: users.length + 1 };
  users.push(newUser);
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
    if (err) {
      return res.status(500).json({ status: "error", error: err });
    }
    return res.status(201).json(newUser); // Respond with the new user
  });
});

// ==================================
// 4) PATCH - Edit an existing user
// ==================================
// app.patch("/api/users/:id", (req, res) => {
//   // TODO: Edit user by ID
//   return res.json({ status: "pending" });
// });

// Example of accidental misuse: POST for delete
// app.post("/api/users/:id", (req, res) => {
//   // TODO: Delete user (should use DELETE method instead of POST)
//   return res.json({ status: "pending" });
// });

// ==================================================
// Alternative Route Grouping for the same endpoint
// ==================================================
// Instead of writing app.get(), app.patch(), app.delete() separately,
// we can chain them with app.route(path).method(handler) for better readability.

app
  .route("/api/users/:id")
  .get((req, res) => {
    // GET specific user by ID
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    const id = Number(req.params.id);
    const body = req.body;
    // Find user index
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return res.status(404).json({ error: "User not found" });
    }
    console.log(userIndex);
    // Update user fields
    users[userIndex] = { ...users[userIndex], ...body };
    console.log(users[userIndex]);
    // Write updated users array to file
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
      if (err) {
        return res.status(500).json({ status: "error", error: err });
      }
      return res.json(users[userIndex]); // Respond with updated user
    });
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    // Find the index of the user to delete
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return res.status(404).json({ error: "User not found" });
    }
    // Remove the user from the array
    const deletedUser = users.splice(userIndex, 1)[0]; // [0] to get the deleted object
    // Save the updated users array to the file
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
      if (err) {
        return res.status(500).json({ status: "error", error: err });
      }
      // Return the deleted user as confirmation
      return res.json({ status: "success", deletedUser });
    });
  });
