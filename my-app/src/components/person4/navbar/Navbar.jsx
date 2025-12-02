import { Link, useLocation } from 'react-router-dom';

import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentIcon from '@mui/icons-material/Payment';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CelebrationIcon from '@mui/icons-material/Celebration';
import RoomServiceIcon from '@mui/icons-material/RoomService';


import './Navbar.css';

export default function SideNav() {
  const location = useLocation();

  const links = [
    // MAIN
    { section: "MAIN" },
    { to: '/dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
    { to: '/progressreps', label: 'Progress Reports', icon: <BarChartIcon /> },
    { to: '/certificates', label: 'Certificates', icon: <CelebrationIcon />},

    // COURSES
    { section: "COURSES" },
    { to: '/progress', label: 'Course Progress', icon: <TrendingUpIcon /> },
    { to: '/catalog', label: 'Course Catalog', icon: <GolfCourseIcon /> },

    // MANAGE
    { section: "MANAGE" },
    { to: '/profile', label: 'Profile', icon: <PersonIcon /> },
    { to: '/accountinfo', label: 'Account', icon: <AccountBalanceIcon /> },
    { to: '/billing', label: 'Billing', icon: <PaymentIcon /> },
    { to: '/notifs', label: 'Notifications', icon: <RoomServiceIcon />},
  ];

  return (
    <nav className='side-nav'>
      {links.map((item, index) => {

        // Section title
        if (item.section) {
          return (
            <div key={index} className="section-title">
              {item.section}
            </div>
          );
        }

        return (
          <Link
            key={item.to}
            to={item.to}
            className={`link ${location.pathname === item.to ? 'active-link' : ''}`}
          >
            {item.icon}
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
