import express from "express";
import { createServer } from "node:http";
import path from "node:path";
import { Server } from "socket.io";
const app = express();
const server = createServer(app);
const io = new Server(server);
const port = 8080;

app.use(express.static("/public"));

app.get("/", (req, res) => {
  return res.sendFile(path.resolve("./public/index.html"));
});
io.on("connection", (socket) => {
  console.log("a user connected");
});
server.listen(port, () => {
  console.log("App is listening on port: ", port);
});
