import { Link } from 'react-router-dom';
import './SideNav.css';

export default function SideNav() {
  return (
    <nav className="sidenav">
      <div className="sidenav-header">
        <h2 className="sidenav-title">Admin Panel</h2>
      </div>

      <div className="sidenav-links">
        <Link to="/admin-dashboard" className="sidenav-link">
          Dashboard
        </Link>
      </div>
    </nav>
  );
}
