import { useState } from "react";
import axios from "axios";

function AddStudent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roll_number: "",
    course: "",
    semester: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/api/students", formData);

      alert("Student added successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        roll_number: "",
        course: "",
        semester: ""
      });
    } catch (error) {
      console.error(error);
      alert("Failed to add student");
    }
  };

  return (
    <div>
      <h2>Add New Student</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="roll_number"
          placeholder="Roll Number"
          value={formData.roll_number}
          onChange={handleChange}
        />

        <input
          type="text"
          name="course"
          placeholder="Course"
          value={formData.course}
          onChange={handleChange}
        />

        <input
          type="number"
          name="semester"
          placeholder="Semester"
          value={formData.semester}
          onChange={handleChange}
        />

        <button type="submit">
          Add Student
        </button>
      </form>
    </div>
  );
}

export default AddStudent;