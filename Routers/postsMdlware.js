const express = require("express");
const router = require("./router");
const routers = express.Router();

routers.get("/", async (req, res) => {
  try {
    res.send("we are on post page");
  } catch (err) {
    res.json({ msg: err });
  }
});

module.exports = routers;
