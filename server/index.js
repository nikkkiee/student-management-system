// // const http = require("http");

// // const server = http.createServer((req, res) => {
// //   res.write("Hello from Node");
// //   res.end();
// // });

// // server.listen(8000, () => {
// //   console.log("Node server running on port 8000");
// // });

// // const express = require("express");
//  const cors = require("cors");

// //const app = express();
// app.use(cors());

// app.get("/", (req, res) => {
//   res.send("Student Management System Backend Running 🚀");
// });

// app.get("/api/students", (req, res) => {
//   res.json([
//     {
//       id: 1,
//       name: "Nikki",
//       roll: 101,
//       course: "CSE",
//     },
//     {
//       id: 2,
//       name: "Rahul",
//       roll: 102,
//       course: "IT",
//     },
//   ]);
// });

// app.listen(8000, () => {
//   console.log("Server running on port 8000");
// });



// const express = require("express");
// const cors = require("cors");

// const app = express();

// app.use(cors());

// app.get("/", (req, res) => {
//   res.send("Student Management System Backend Running 🚀");
// });

// app.get("/api/students", (req, res) => {
//   res.json([
//     {
//       id: 1,
//       name: "Nikki",
//       roll: 101,
//       course: "CSE",
//     },
//     {
//       id: 2,
//       name: "Rahul",
//       roll: 102,
//       course: "IT",
//     },
//   ]);
// });

// app.listen(8000, () => {
//   console.log("Server running on port 8000");
// });

// const express = require("express");
// const mysql = require("mysql2");

// const app = express();

// app.use(express.json());

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "nikvish09",
//   database: "student_management",
//   port: 3306
// });

// db.connect((err) => {
//   if (err) {
//     console.error("MySQL connection failed:", err);
//     return;
//   }

//   console.log("MySQL connected successfully!");
// });

// app.get("/", (req, res) => {
//   res.send("Student Management System Backend Running 🚀");
// });

// app.listen(8000, () => {
//   console.log("Node server running on port 8000");
// });





// const express = require("express");
// const mysql = require("mysql2");

// const app = express();

// app.use(express.json());
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "nikvish09",
  database: "student_management",
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err);
    return;
  }

  console.log("MySQL connected successfully!");
});

app.get("/", (req, res) => {
  res.send("Student Management System Backend Running 🚀");
});

app.get("/api/students", (req, res) => {
  const sql = "SELECT * FROM students";

  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        message: "Database error"
      });
    }

    res.json(results);
  });
});

// adding POST API
app.post("/api/students", (req, res) => {
  const { name, email, phone, roll_number, course, semester } = req.body;

  const sql = `
    INSERT INTO students
    (name, email, phone, roll_number, course, semester)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  const values = [
    name,
    email,
    phone,
    roll_number,
    course,
    semester
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);

      return res.status(500).json({
        message: "Failed to add student"
      });
    }

    res.status(201).json({
      message: "Student added successfully",
      studentId: result.insertId
    });
  });
});


app.put("/api/students/:id", (req, res) => {
  const { id } = req.params;

  const {
    name,
    email,
    phone,
    roll_number,
    course,
    semester
  } = req.body;

  const sql = `
    UPDATE students
    SET
      name = ?,
      email = ?,
      phone = ?,
      roll_number = ?,
      course = ?,
      semester = ?
    WHERE id = ?
  `;

  const values = [
    name,
    email,
    phone,
    roll_number,
    course,
    semester,
    id
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);

      return res.status(500).json({
        message: "Failed to update student"
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.json({
      message: "Student updated successfully"
    });
  });
});


app.listen(8000, () => {
  console.log("Node server running on port 8000");
});