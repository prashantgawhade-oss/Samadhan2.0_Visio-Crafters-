const express = require("express");
const app = express();
app.use(express.json());   // JSON support

const students = [
  { id: 1, name: "Gulshan", course: "CSE" },
  { id: 2, name: "Prashant", course: "ECE" },
  { id: 3, name: "Anjali", course: "IT" }
];

// Home route
app.get("/", (req, res) => res.send("Welcome to Day 5: Express.js Basics 🚀"));

// GET → all students
app.get("/students", (req, res) => res.json(students));

// POST → add new student
app.post("/students", (req, res) => {
  const newStudent = { id: students.length + 1, ...req.body };
  students.push(newStudent);
  res.json(newStudent);
});

// Start server
app.listen(3000, () => console.log("✅ Server running at http://localhost:3000"));