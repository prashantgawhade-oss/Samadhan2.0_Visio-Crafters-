const express = require("express");
const app = express();
const PORT = 5000;

const students = [
  { id: 1, name: "Gulzar", marks: 435 },
  { id: 2, name: "Arsalan", marks: 358 },
  { id: 3, name: "Himanshu", marks: 366 }
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
