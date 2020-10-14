const express = require("express");
const { json } = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

const router = require("./Routers/router");

// Import postsRoutes
// const postRoute = require("./Routers/postsMdlware");

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

// app.use("/posts", postRoute);

// connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true },
  () => {
    console.log("conected to the DB!");
  }
);

// listen to the PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is runung on port: ${PORT}`));

// const postmiddleware = (req, res) => {
//   res.send("middle ware is runningt");
// };

// // middleware
// app.use("/post", postmiddleware);

// app.get("/", (req, res) => {
//   res.send("we are at home page");
// });

// app.get("/post", (req, res) => {
//   res.send("we are on post page");
// });

// app.use("/api/members", require("./Routers/routers"))
