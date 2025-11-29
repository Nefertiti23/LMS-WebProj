import { Link } from 'react-router-dom';

export default function SideNav() {
  return (
    <nav className='flex flex-col gap-3 w-64 p-4'>
        <div className='flex flex-col gap-1'>
            <Link to='/dashboard' className='link px-2 py-1.5 rounded text-sm font-light'>
            Dashboard
            </Link>
            <p className='m-1 text-sm font-extralight'>MANAGE</p>
            <Link to='/profile' className='link px-2 py-1.5 rounded text-sm font-light'>
            Profile
            </Link>
            <Link to='/accountinfo' className='link px-2 py-1.5 rounded text-sm font-light'>
            Account
            </Link>
            <Link to='/billing' className='link px-2 py-1.5 rounded text-sm font-light'>
            Billing
            </Link>
            <Link to='/progressreps' className='link px-2 py-1.5 rounded text-sm font-light'>
            Progress
            </Link>
            <Link to='/certificates' className='link px-2 py-1.5 rounded text-sm font-light'>
            Certificates
            </Link>
            <Link to='/notifs' className='link px-2 py-1.5 rounded text-sm font-light'>
            Notifications
            </Link>
        </div>
    </nav>
  );
}