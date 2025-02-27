const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use((req, res, next) => {
  res.header("Content-Type", "application/json; charset=utf-8");
  next();
});

server.get("/products/:id", (req, res) => {
  res.json({ id: 10, name: "Margharita", type: "pizza", version: "1.0.0" });
});

module.exports = {
  server,
}
