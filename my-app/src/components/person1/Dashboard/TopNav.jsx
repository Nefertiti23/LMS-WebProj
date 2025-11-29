import { useNavigate } from 'react-router-dom';
import './TopNav.css';
import { Typography, Box } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School'; // or any icon you like

export default function TopNav() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/');
  };

  return (
    <div className="topnav">
      <Box className="logo">
        <SchoolIcon className="logo-icon" />
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            background: 'linear-gradient(90deg, #3c6e71, #EA7317)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '2px',
          }}
        >
          MIRF
        </Typography>
      </Box>

      <div className="user-section">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
