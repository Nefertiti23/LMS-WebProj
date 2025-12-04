import React from "react";
import { courses } from "./courses";
import "./CourseDetail.css";

function CourseDetail() {
  return (
    <div className="course_detail_container">
      <h2>All Courses</h2>
      <div className="course_detail_grid">
        {courses.map((course) => (
          <div className="course_detail_card" key={course.course_id}>
            <h3 className="course_title">{course.title}</h3>
            <p className="course_description">{course.description}</p>
            <p className="course_instructor">Instructor: {course.instructor_name}</p>
            <p className="course_price">Price: Rs{course.price}</p>

            <div className="course_modules">
              <h4>Modules:</h4>
              <ul>
                {course.modules?.map((module, idx) => (
                  <li key={idx}>{module}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseDetail;