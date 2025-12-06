import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { courses } from "../courses";  
import "./CourseEnrollment.css";

function CourseEnrollment() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const navigate = useNavigate();

  const handleCourseClick = (courseId, courseName) => {
      navigate('/viewlesson', { state: { courseid: courseId, coursename: courseName } });
  };

  useEffect(() => {
    const enrolledId = JSON.parse(localStorage.getItem("enrolled")) || [];
    const enrolled = courses.filter(course =>
      enrolledId.includes(course.course_id)
    );
    setEnrolledCourses(enrolled);
  }, []);

  if (enrolledCourses.length === 0) {
    return <p>You haven't enrolled in any courses yet.</p>;
  }

  return (
    <div className="screen">
      <h3 className='font-semibold text-3xl'>Enrolled Courses</h3>
      <div className="enrollment">
        <div className="enrolled_courses">
          {enrolledCourses.map((course) => (
            <div className="enrolled_card" key={course.course_id}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p>Instructor: {course.instructor_name}</p>
              {/* <p className="font-bold text-(--primary)!">Price: Rs {course.price}</p> */}
              <button className="border bg-(--secondary) py-1.5 rounded-lg text-white hover:bg-(--darkpinkAccent)"
              onClick={() => handleCourseClick(course.course_id, course.title)}>Go to content</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseEnrollment;
