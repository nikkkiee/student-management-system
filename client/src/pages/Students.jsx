import { useEffect, useState } from "react";
import axios from "axios";

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/students"
      );

      setStudents(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Students</h1>

      {students.map((student) => (
        <div
          key={student.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{student.name}</h3>
          <p>Roll: {student.roll_number}</p>
          <p>Email: {student.email}</p>
          <p>Course: {student.course}</p>
          <p>Semester: {student.semester}</p>
        </div>
      ))}
    </div>
  );
}

export default Students;