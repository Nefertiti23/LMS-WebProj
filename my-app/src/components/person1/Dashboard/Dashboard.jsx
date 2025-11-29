import React from "react";
import TopNav from "./TopNav";
import "./Dashboard.css";
import Profile from "../profile/Profile";

export default function Dashboard({ a_user }) {
  const dummyCourses = [
    { id: 1, title: "React Basics", description: "Learn React from scratch", image: "/images/react.png" },
    { id: 2, title: "JavaScript Advanced", description: "Deep dive into JS", image: "/images/js.png" },
    { id: 3, title: "HTML & CSS Mastery", description: "Build beautiful websites", image: "/images/htmlcss.png" },
    { id: 4, title: "Python for Beginners", description: "Start coding in Python", image: "/images/python.png" },
  ];

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-content">
        <TopNav />

        {/* PROFILE SECTION  */}
        <h2 className="section-heading">Profile</h2>
        <div className="profile-preview-container">
          <Profile a_user={a_user} previewMode={true} />
        </div>

        {/* COURSES*/}
        <h2 className="section-heading">Your Courses</h2>
        <div className="courses-container">
          {dummyCourses.map(course => (
            <div key={course.id} className="course-card">
              <img src={course.image} alt={course.title} className="course-image" />
              <h3 className="course-title">{course.title}</h3>
              <p className="course-desc">{course.description}</p>
            </div>
          ))}
        </div>

       {/* Progress */}
        <h2 className="section-heading">Your Progress</h2>
        <div className="progress-section">
          
          <div className="progress-card">
            <p className="ofuser">{a_user.userProgress.level}</p>
            <p className="text-xs font-medium text-neutral-500">STATUS</p>
          </div>

          <div className="progress-card">
            <p className="ofuser">{a_user.userProgress.courses.completed.length}</p>
            <p className="text-xs font-medium text-neutral-500">COURSES COMPLETED</p>
          </div>

          <div className="progress-card">
            <p className="ofuser">{a_user.userProgress.streakDays} days</p>
            <p className="text-xs font-medium text-neutral-500">LONGEST RUNNING STREAK</p>
          </div>
        </div>
      </div>
    </div>
  );
}
