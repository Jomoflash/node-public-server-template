const path = require("path");
const express = require("express");
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/**
 * API
 */
app.get("/api", function (req, res, next) {
  let data = {
    message: "Hello World!",
  };
  res.status(200).send(data);
});

/**
 * STATIC FILES
 */

const publicDirectoryPath = path.join(__dirname, "../public");
app.use("/", express.static(publicDirectoryPath));

// Default every route except the above to serve the index.html
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/404.html"));
});
module.exports = app;
