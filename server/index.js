const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 5000;

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);

io.on("connection", (socket) => {
  console.log("We have a new connection"); // when a new socket connects on the client side
  socket.on("disconnect", () => console.log("User has left")); // on disconnecting
});

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));