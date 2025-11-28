import { useNavigate } from 'react-router-dom';
import './TopNav.css';

export default function TopNav() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/');
  };

  // Get logged-in user from localStorage
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  return (
    <div className="topnav">
      <div className="logo">LMS Portal</div>

      <div className="user-section">
        <p className="username">Hello, <span className="username-name">{user?.name || "User"}</span></p>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
