import { Link } from 'react-router-dom';

export default function SideNav() {
  return (
    <nav className='flex flex-col gap-3 w-64 p-4'>
        <div className='flex flex-col gap-1'>
            <p className='m-1 text-sm font-extralight'>MANAGE</p>
            <Link to='/profile' className='hover:bg-slate-900 px-2 py-1.5 rounded text-sm font-light'>
            Profile
            </Link>
            <Link to='/accountinfo' className='hover:bg-slate-900 px-2 py-1.5 rounded text-sm font-light'>
            Account
            </Link>
            <Link to='/billing' className='hover:bg-slate-900 px-2 py-1.5 rounded text-sm font-light'>
            Billing
            </Link>
            <Link to='/subscriptions' className='hover:bg-slate-900 px-2 py-1.5 rounded text-sm font-light'>
            Subscriptions
            </Link>
        </div>
    </nav>
  );
}