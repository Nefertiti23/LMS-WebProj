import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  // Check if user is logged in
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  const handleGoDashboard = () => {
    if (loggedInUser) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  const featuredCourses = [
    { id: 1, title: "React Basics", image: "/images/react.png" },
    { id: 2, title: "JavaScript Advanced", image: "/images/js.png" },
    { id: 3, title: "HTML & CSS Mastery", image: "/images/htmlcss.png" },
  ];

  return (
    <div className="home-page">
      <section className="hero">
        <h1>Learn, Grow & Achieve!</h1>
        <p>Join our LMS and boost your skills today.</p>
        <button className="dashboard-btn" onClick={handleGoDashboard}>
          Go to Dashboard
        </button>
      </section>

      <section className="featured-courses">
        <h2>Featured Courses</h2>
        <div className="courses-preview">
          {featuredCourses.map(course => (
            <div key={course.id} className="course-card">
              <img src={course.image} alt={course.title} />
              <h3>{course.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 LMS Portal. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  );
}
