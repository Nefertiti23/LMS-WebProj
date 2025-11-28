import { Link } from 'react-router-dom';


export default function SideNav() {
  return (
    <nav className='sidenav'>
      <div className='sidenav-header'>
        <p className='sidenav-title'>Admin Dashboard</p>
      </div>

      <div className='sidenav-section'>
        <Link to='/admin-dashboard' className='sidenav-link'>Dashboard</Link>
        {/* <Link to='/admin/users' className='sidenav-link'>Users</Link>
        <Link to='/admin/courses' className='sidenav-link'>Courses</Link>
        <Link to='/admin/settings' className='sidenav-link'>Settings</Link> */}
      </div>
    </nav>
  );
}
