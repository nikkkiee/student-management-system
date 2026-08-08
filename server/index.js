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





const express = require("express");
const mysql = require("mysql2");

const app = express();

app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "YOUR_MYSQL_PASSWORD",
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

app.listen(8000, () => {
  console.log("Node server running on port 8000");
});