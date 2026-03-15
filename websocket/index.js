import express from "express";
import { WebSocketServer } from "ws";
const app = express();
const port = 8080;

const server = app.listen(port, () => {
  console.log("Server listening on port: ", port);
});

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    console.log("Data from client: ", data.toString());
    ws.send("Thanks Bro!");
  });
});
