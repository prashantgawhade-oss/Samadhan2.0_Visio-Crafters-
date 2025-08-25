const express = require("express");
const app = express();
const PORT = 3000;

const students = [
  { id: 1, name: "Martin", marks: 358 },
  { id: 2, name: "Gulshan", marks: 348 },
  { id: 3, name: "Sakshi", marks: 372 }
];

app.get("/api/students", (req, res) => {
  res.json(students);
});

app.get("/", (req, res) => {
  res.send("Welcome to Students API");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
