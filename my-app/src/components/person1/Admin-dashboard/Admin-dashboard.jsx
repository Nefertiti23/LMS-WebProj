import SideNav from './SideNav';
import TopNav from '../Dashboard/TopNav';
import './admin-dashboard.css';

export default function AdminDashboard() {
  // Get logged-in user
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  // Dummy stats
  const totalUsers = 50;
  const totalCourses = 10;
  const totalTeachers = 5;

  // Dummy users list
  const dummyUsers = [
    { id: 1, username: 'Ali123', role: 'Student' },
    { id: 2, username: 'Sara01', role: 'Teacher' },
    { id: 3, username: 'Admin01', role: 'Admin' },
  ];

  return (
    <div className="admin-dashboard-wrapper">
      <SideNav />
      <div className="admin-dashboard-content-wrapper">
        <TopNav user={user} />

        <div className="admin-dashboard-content">
          <h2>Hello, {user?.username || "Admin"} (Admin)</h2>

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
              </tr>
            </thead>
            <tbody>
              {dummyUsers.map(u => (
                <tr key={u.id}>
                  <td>{u.username}</td>
                  <td>{u.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
