import SideNav from '../../person4/navbar/Navbar';
import TopNav from './TopNav';
import './Dashboard.css';

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  if (!user) return <p>Please log in</p>;

  const dummyCourses = [
    { id: 1, title: "React Basics", description: "Learn React from scratch", image: "/images/react.png" },
    { id: 2, title: "JavaScript Advanced", description: "Deep dive into JS", image: "/images/js.png" },
    { id: 3, title: "HTML & CSS Mastery", description: "Build beautiful websites", image: "/images/htmlcss.png" },
    { id: 4, title: "Python for Beginners", description: "Start coding in Python", image: "/images/python.png" },
  ];

  return (
    <div className="dashboard-wrapper">
      <SideNav />
      <div className="dashboard-content">
        <TopNav />
        <p className="username">Hello, <span className="username-name">{user.username}</span></p>
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
