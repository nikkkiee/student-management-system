// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.write("Hello from Node");
//   res.end();
// });

// server.listen(8000, () => {
//   console.log("Node server running on port 8000");
// });

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Student Management System Backend Running 🚀");
});

app.get("/api/students", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Nikki",
      roll: 101,
      course: "CSE",
    },
    {
      id: 2,
      name: "Rahul",
      roll: 102,
      course: "IT",
    },
  ]);
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});