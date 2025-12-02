import React, { useState, useEffect } from "react";
import { courses } from "../courses";  
import "./CourseEnrollment.css";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function LinearDeterminate() {

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" value={30} />
    </Box>
  );
}


function CourseEnrollment() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

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
              <LinearDeterminate />
              <p className="text-sm">3/6 quizzes completed</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseEnrollment;
