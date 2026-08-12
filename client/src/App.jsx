// function App() {
//   return (
//     <h1>Student Management System</h1>
//   );
// }

// export default App;


// import Dashboard from "./pages/Dashboard";

// function App() {
//   return (
//     <Dashboard />
//   );
// }

// export default App;

// import AddStudent from "./AddStudent";


// import { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     try {
//       const res = await axios.get("http://localhost:8000/api/students");
//       setStudents(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div style={{ padding: "30px" }}>
//       <h1>Student Management System</h1>

//       <h2>Students List</h2>

//       {students.map((student) => (
//         <div
//           key={student.id}
//           style={{
//             border: "1px solid gray",
//             padding: "10px",
//             marginBottom: "10px",
//           }}
//         >
//           <h3>{student.name}</h3>
//           <p>Roll : {student.roll}</p>
//           <p>Course : {student.course}</p>
//         </div>
//       ))}
//     </div>
//   ); 
// }

// export default App;





// import { useEffect, useState } from "react";
// import axios from "axios";
// import AddStudent from "./AddStudent";

// function App() {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     try {
//       const res = await axios.get("http://localhost:8000/api/students");
//       setStudents(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div style={{ padding: "30px" }}>
//       <h1>Student Management System</h1>

//       <h2>Students List</h2>

//       {students.map((student) => (
//         <div
//           key={student.id}
//           style={{
//             border: "1px solid gray",
//             padding: "10px",
//             marginBottom: "10px",
//           }}
//         >
//           <h3>{student.name}</h3>

//           <p>Roll: {student.roll_number}</p>

//           <p>Email: {student.email}</p>

//           <p>Phone: {student.phone}</p>

//           <p>Course: {student.course}</p>

//           <p>Semester: {student.semester}</p>
//         </div>
//       ))}

//       <hr />

//       <AddStudent />
//     </div>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import AddStudentPage from "./pages/AddStudentPage";

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "30px" }}>

        <h1>Student Management System</h1>

        <nav style={{ marginBottom: "30px" }}>
          <Link to="/" style={{ marginRight: "20px" }}>
            Dashboard
          </Link>

          <Link to="/students" style={{ marginRight: "20px" }}>
            Students
          </Link>

          <Link to="/students/add">
            Add Student
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/students" element={<Students />} />

          <Route
            path="/students/add"
            element={<AddStudentPage />}
          />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;