import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { courses } from "../courses";  
import "./CourseEnrollment.css";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

function LinearDeterminate({ progress = 40 }) {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}

export default function CourseEnrollment({ a_user }) {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const enrolledIDs_local = JSON.parse(localStorage.getItem("enrolled")) || [];
    const enrolledNames_user = a_user?.userProgress?.courses?.enrolled || [];

    const merged = courses.filter(
      (course) =>
        enrolledIDs_local.includes(course.course_id) ||
        enrolledNames_user.includes(course.title)
    );

    setEnrolledCourses(merged);
  }, [a_user]);

  const handleUnenroll = (courseId) => {
    // Remove from localStorage
    const enrolledIDs_local = JSON.parse(localStorage.getItem("enrolled")) || [];
    const updatedIDs = enrolledIDs_local.filter(id => id !== courseId);
    localStorage.setItem("enrolled", JSON.stringify(updatedIDs));

    // Remove from state
    setEnrolledCourses(prev => prev.filter(course => course.course_id !== courseId));
  };

  if (enrolledCourses.length === 0) {
    return (
      <div className="p-5">
        <h2 className="text-xl font-semibold">Enrolled Courses</h2>
        <p className="mt-2 opacity-80">You haven't enrolled in any courses yet.</p>
      </div>
    );
  }

  return (
    <div className="screen p-5">
      <h3 className="font-semibold text-3xl mb-5">Enrolled Courses</h3>

      <div className="enrollment">
        <div className="enrolled_courses">
          {enrolledCourses.map((course) => (
            <div
              className="enrolled_card cursor-pointer"
              key={course.course_id}
            >
              <div
                onClick={() => navigate(`/course/${course.course_id}/learn`)}
              >
                <h3 className="font-bold text-xl">{course.title}</h3>
                <p className="opacity-80 mb-2">{course.description}</p>
                <p className="text-sm mb-3">Instructor: {course.instructor_name}</p>
                <LinearDeterminate progress={40} />
                <p className="text-sm opacity-70 mt-1">Progress: 40%</p>
              </div>

              <button
                className="mt-2 px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700"
                onClick={() => handleUnenroll(course.course_id)}
              >
                Unenroll
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
