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

  const goToCreate = () => {
    navigate('/signup');
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
            sx={{color: 'white', fontWeight: 700}}
          >
            MIRF
          </Typography>
        </Box>

        <button className="nav-btn" onClick={handleGoDashboard}>
          Go to Dashboard
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section mt-10">
        <div className="hero-text flex flex-col h-100">
          <h1>
            Start Learning <span>at Home</span>
          </h1>
          <p className='my-1 text-xl text-gray-500'>Empower your journey with the MIRF LMS platform.</p>

          <button className="hero-btn w-1/3 px-2 py-3 mt-8" onClick={goToCreate}>
            Start Learning
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
