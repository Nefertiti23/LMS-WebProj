// src/components/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>

      <ul>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/quiz/sample">Quiz</Link>
        </li>
        <li>
          <Link to="/assignments">Assignments</Link>
        </li>
        <li>
          <Link to="/notes">Notes</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
