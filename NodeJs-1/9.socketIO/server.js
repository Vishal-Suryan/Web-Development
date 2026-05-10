const express = require("express");
const http = require("http");
const path = require("path");
const socketIo = require("socket.io");
const app = express();

const server = http.createServer(app);

//initiate socket.io and attach this to http server
const io = socketIo(server);

app.use(express.static(path.join(__dirname, "public")));

const users = new Set();
io.on("connection", (socket) => {
  console.log("A user is now connected");
  //handle user when they join the chat
  socket.on("join", (userName) => {
    users.add(userName);
    //broadcast to all client/users that a new user has joined
    io.emit("userJoined", userName);
    //Send updated suer list to all clients
    io.emit("userList", Array.from(users));
  });
  //handle incoming chat messages
  socket.on("chatMessage", (message) => {
    io.emit("chatMessage", message);
  });

  //handle user disconnection
});

server.listen(3000, () => {
  console.log("Server running on Port 3000");
});
