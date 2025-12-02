import SideNavBar from './SideNavBar';
import './Teacher-dashboard.css';
import TopNav from '../Dashboard/TopNav';

export default function TeacherDashboard({currentUser}) {

  if (!currentUser) return <p className='text-center my-20 text-md'>Please log in</p>;

  const dummyTeachingCourses = [
    { id: 1, title: "React Basics", students: 25 },
    { id: 2, title: "JavaScript Advanced", students: 18 },
    { id: 3, title: "HTML & CSS Mastery", students: 30 },
  ];

  return (
    <div className="teacher-dashboard-wrapper">
      <SideNavBar />
      <div className="teacher-dashboard-content">
        <TopNav />
        <p className="username">
          Hello, <span className="username-name">{currentUser.username}</span> (Teacher)
        </p>

        <section className="teaching-courses">
          <h2>Your Teaching Courses</h2>
          <div className="course-cards">
            {dummyTeachingCourses.map(course => (
              <div key={course.id} className="course-card">
                <h3 className="course-title">{course.title}</h3>
                <p>Enrolled Students: {course.students}</p>
                <button className="view-btn">View Students</button>
              </div>
            ))}
          </div>
        </section>

        <section className="teacher-notices">
          <h2>Notices</h2>
          <ul>
            <li>Grade submission deadline: 30th Nov</li>
            <li>New assignment uploaded for React Basics</li>
            <li>Staff meeting on Friday 3 PM</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
