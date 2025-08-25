const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", function (req, res) {
  res.send("Welcome to Samadhan 2.0");
});

app.get("/api/hello", function (req, res) {
  res.send("Hello, World!");
});

app.listen(PORT, function () {
  console.log("✅ Server running on http://localhost:" + PORT);
});