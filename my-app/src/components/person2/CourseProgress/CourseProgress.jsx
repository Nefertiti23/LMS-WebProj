 import React, { useState, useEffect } from "react";
import { courses } from "../courses";
import "./CourseProgress.css";

function CourseProgress() {
  const [studentProgress, setStudentProgress] = useState({});
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const savedProgress = JSON.parse(localStorage.getItem("studentprogress")) || {};
    setStudentProgress(savedProgress);

    const enrolledCourseIds = JSON.parse(localStorage.getItem("enrolled")) || [];
    const totalEnrolledCourses = courses.filter(course =>
      enrolledCourseIds.includes(course.course_id)
    );
    setEnrolledCourses(totalEnrolledCourses);
  }, []);

  const handleChange = (course_id, value) => {
    const updatedValue = { ...studentProgress, [course_id]: value };
    setStudentProgress(updatedValue);
    localStorage.setItem("studentprogress", JSON.stringify(updatedValue));
  };

  if (enrolledCourses.length === 0) {
    return <p style={{ textAlign: "center", marginTop: "20px" }}>You haven't enrolled in any courses yet.</p>;
  }

  return (
    <div className="progress">
      <h2 className="progress_h">My Course Progress</h2>
      <div className="course_catalog">
        {enrolledCourses.map((course) => (
          <div className="course_card" key={course.course_id}>
            <h3 className="course_title">{course.title}</h3>

            <label className="progress_label">
              Progress: {studentProgress[course.course_id] || 0}%
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={studentProgress[course.course_id] || 0}
              onChange={(e) =>
                handleChange(course.course_id, parseInt(e.target.value))
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseProgress;