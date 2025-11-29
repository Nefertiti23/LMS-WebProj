import { useNavigate } from 'react-router-dom';
import './Home.css';
import { Box, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

export default function Home() {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  const handleGoDashboard = () => {
    if (loggedInUser) navigate('/dashboard');
    else navigate('/login');
  };

  return (
    <div className="new-home">

      {/* NAVBAR */}
      <nav className="home-nav">
        <Box className="home-logo">
          <SchoolIcon 
            className="logo-icon"
            sx={{ color: 'var(--pinkAccent)', fontSize: 40 }}
          />
          
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(90deg, var(--primary), var(--pinkAccent))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '2px',
            }}
          >
            MIRF
          </Typography>
        </Box>

        <button className="nav-btn" onClick={handleGoDashboard}>
          Go to Dashboard
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>
            Start Learning <span>at Home</span>
          </h1>
          <p>Empower your journey with the MIRF LMS platform.</p>

          <button className="hero-btn" onClick={handleGoDashboard}>
            Go to Dashboard
          </button>
        </div>

        <div className="hero-img">
          <img src="/images/hero-illustration1.png" alt="Learning Illustration" />
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 MIRF LMS. All rights reserved.</p>
      </footer>
    </div>
  );
}
