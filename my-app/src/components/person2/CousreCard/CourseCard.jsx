import React from "react";
import "./CourseCard.css";

function CourseCard({ course, onEnroll }) {
  return (
    <div className="course_card">
      <h3 className="course_title">{course.title}</h3>
      <p className="course_description">{course.description}</p>
      <p className="course_instructor">{course.instructor_name}</p>
      <p className="course_price">Rs {course.price}</p>
      <button className="enroll_button" onClick={() => onEnroll(course)}>
        Enroll
      </button>
    </div>
  );
}

export default CourseCard;