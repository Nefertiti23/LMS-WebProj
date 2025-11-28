import TopNav from './TopNav';
import './Dashboard.css';

export default function Dashboard() {
  // Get logged-in user from localStorage
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  const dummyCourses = [
    { id: 1, title: "React Basics", description: "Learn React from scratch", image: "/images/react.png" },
    { id: 2, title: "JavaScript Advanced", description: "Deep dive into JS", image: "/images/js.png" },
    { id: 3, title: "HTML & CSS Mastery", description: "Build beautiful websites", image: "/images/htmlcss.png" },
    { id: 4, title: "Python for Beginners", description: "Start coding in Python", image: "/images/python.png" },
  ];

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-content">
        <TopNav user={loggedInUser} />
        <div className="courses-container">
          {dummyCourses.map(course => (
            <div key={course.id} className="course-card">
              <img src={course.image} alt={course.title} className="course-image" />
              <h3 className="course-title">{course.title}</h3>
              <p className="course-desc">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
