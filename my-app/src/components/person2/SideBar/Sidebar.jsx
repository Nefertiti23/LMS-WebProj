import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>
<div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2>LMS  </h2>
        <ul>
          <li><Link to="/" onClick={toggleSidebar}>Course Catalog</Link></li>
          <li><Link to="/enroll" onClick={toggleSidebar}>My Enrollments</Link></li>
          <li><Link to="/progress" onClick={toggleSidebar}>My Progress</Link></li>
          <li><Link to="/detail" onClick={toggleSidebar}>Course Detail</Link></li>
        </ul>
      </div>

      {/* Overlay for clicking outside sidebar */}
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
}

export default Sidebar;