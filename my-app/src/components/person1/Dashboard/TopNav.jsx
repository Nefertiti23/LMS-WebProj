import { useNavigate } from 'react-router-dom';
import './TopNav.css';

import SchoolIcon from '@mui/icons-material/School';

export default function TopNav() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/');
  };

  return (
    <div className="flex flex-row h-max justify-between 
    py-3 px-4 items-center rounded-md w-full bg-(--navBar)">
      <div className="flex flex-row gap-2 items-center ml-2">
        <SchoolIcon className="logo-icon" />
        <p className='text-2xl font-black text-white'>
          MIRF
        </p>
      </div>
      <button className="bg-transparent border border-white p-2 rounded-md 
      text-white hover:bg-white hover:text-(--navBar)" 
      onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
