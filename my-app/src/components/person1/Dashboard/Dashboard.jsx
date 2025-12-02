import React, { useEffect, useState } from "react";
import TopNav from "./TopNav";
import "./Dashboard.css";
import Profile from "../profile/Profile";
import { courses } from "../../person2/courses";
import { Link } from "react-router-dom";

export default function Dashboard({ a_user }) {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const enrolledIds = JSON.parse(localStorage.getItem("enrolled")) || [];
    const userCourses = courses.filter(c =>
      enrolledIds.includes(c.course_id)
    );

    // Show only first 3 cards
    setEnrolledCourses(userCourses.slice(0, 3));
  }, []);

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-content">
        <TopNav />

        {/* PROFILE SECTION */}
        <h2 className="section-heading">Profile</h2>
        <div className="profile-preview-container">
          <Profile a_user={a_user} previewMode={true} />
        </div>

        {/* ENROLLED COURSES */}
        <div className="section-heading flex justify-between items-center">
          <h2>Your Enrolled Courses</h2>

          <Link to="/enrollment" className="see-all-btn">
            See All Enrollments →
          </Link>
        </div>

        <div className="enrollment-preview-container">
          {enrolledCourses.length > 0 ? (
            enrolledCourses.map(course => (
              <div key={course.course_id} className="enrollment-preview-card">
                <h3 className="ep-title">{course.title}</h3>
                <p className="ep-desc">{course.description}</p>
                <p className="ep-inst">By: {course.instructor_name}</p>
              </div>
            ))
          ) : (
            <p>You have not enrolled in any courses yet.</p>
          )}
        </div>

        {/* PROGRESS */}
        <h2 className="section-heading">Your Progress</h2>

        <div className="progress-section">
          <div className="progress-card">
            <p className="ofuser">{a_user.userProgress.level}</p>
            <p className="text-xs font-medium text-neutral-500">STATUS</p>
          </div>

          <div className="progress-card">
            <p className="ofuser">
              {a_user.userProgress.courses.completed.length}
            </p>
            <p className="text-xs font-medium text-neutral-500">
              COURSES COMPLETED
            </p>
          </div>

          <div className="progress-card">
            <p className="ofuser">{a_user.userProgress.streakDays} days</p>
            <p className="text-xs font-medium text-neutral-500">
              LONGEST RUNNING STREAK
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
