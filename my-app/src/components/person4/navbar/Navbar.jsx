import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentIcon from '@mui/icons-material/Payment';
import BarChartIcon from '@mui/icons-material/BarChart';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Navbar.css';

export default function SideNav() {
  const location = useLocation(); 

  const links = [
    { to: '/dashboard', label: 'Dashboard', icon: <HomeIcon /> },
    { to: '/profile', label: 'Profile', icon: <PersonIcon /> },
    { to: '/accountinfo', label: 'Account', icon: <AccountBalanceIcon /> },
    { to: '/billing', label: 'Billing', icon: <PaymentIcon /> },
    { to: '/progressreps', label: 'Progress', icon: <BarChartIcon /> },
    { to: '/certificates', label: 'Certificates', icon: <EmojiEventsIcon /> },
    { to: '/notifs', label: 'Notifications', icon: <NotificationsIcon /> },
  ];

  return (
    <nav className='side-nav'>
      {links.map(link => (
        <Link
          key={link.to}
          to={link.to}
          className={`link px-3 py-2 rounded flex items-center gap-3 text-sm font-light
            ${location.pathname === link.to ? 'active-link' : ''}`}
        >
          {link.icon}
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
