import React, { useState, useEffect } from "react";
import { courses } from "./courses";  
import "./CourseEnrollment.css";

function CourseEnrollment() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
useEffect(() => {
    const enrolledId = JSON.parse(localStorage.getItem("enrolled")) || [];
    const enrolled = courses.filter((course) =>  enrolledId.includes(course.course_id)
    );
    setEnrolledCourses(enrolled);
  }, []);
  if (enrolledCourses.length === 0) {
    return <p>You haven't enrolled in any courses yet.</p>;
  }
 return (
    <div className="enrollment">
      <h1>My Enrolled Courses</h1>
      <div className="enrolled_courses">
        {enrolledCourses.map((course) => (
          <div className="enrolled_card" key={course.course_id}>
                      <h3>{course.title}</h3>
    <p>{course.description}</p>
        <p>Instructor: {course.instructor_name}</p>
            <p>Price: Rs {course.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CourseEnrollment;