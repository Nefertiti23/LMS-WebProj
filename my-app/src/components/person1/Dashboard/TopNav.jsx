import { useNavigate } from 'react-router-dom';
import './TopNav.css';

export default function TopNav() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/');
  };

 

  return (
    <div className="topnav">
      <div className="logo">LMS Portal</div>
      <div className="user-section">
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
