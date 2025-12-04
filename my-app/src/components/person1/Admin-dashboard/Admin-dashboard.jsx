import SideNav from './SideNav';
import TopNav from '../Dashboard/TopNav';
import './admin-dashboard.css';
import { courses } from '../../person2/courses'; // import courses

export default function AdminDashboard({theuser, allusers}) {
  console.log(allusers);
  // Stats
  const totalUsers = allusers.length;
  const totalCourses = courses.length;
  const totalTeachers = allusers.filter(u => u.role === 'teacher').length;

  return (
    <div className="admin-dashboard-wrapper">
      <SideNav />
      <div className="admin-dashboard-content-wrapper">
        <TopNav user={theuser} />

        <div className="admin-dashboard-content">
          <h2>Hello, {theuser?.username || "Admin"} (Admin)</h2>

          <div className="cards-container">
            <div className="card">
              <p>Total Users</p>
              <h3>{totalUsers}</h3>
            </div>
            <div className="card">
              <p>Total Courses</p>
              <h3>{totalCourses}</h3>
            </div>
            <div className="card">
              <p>Total Teachers</p>
              <h3>{totalTeachers}</h3>
            </div>
          </div>

          <h3>Users List</h3>
          <table className="users-table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Role</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {allusers.map((u, index) => (
                <tr key={index}>
                  <td>{u.username}</td>
                  <td>{u.role}</td>
                  <td>{u.email}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Courses List</h3>
          <table className="users-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Instructor</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {courses.map(c => (
                <tr key={c.course_id}>
                  <td>{c.title}</td>
                  <td>{c.instructor_name}</td>
                  <td>{c.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
