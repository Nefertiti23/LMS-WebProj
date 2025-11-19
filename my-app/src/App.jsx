import { BrowserRouter } from 'react-router-dom';
import SideNav from './components/person4/navbar/Navbar';
import Router from './components/person4/Router';

export default function App() {
  const userData = {
    name: "Jacuel", 
    dateOfJoin: "10-09-23", 
    imageURL: "vite.svg", 
    streakDays: 3, 
    timeSpent: 13, 
    userStatus: "Silver",
    email: "jacuelresmone@wata.com",
    password: "plinquet243"
  };

  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <SideNav />
        <div className="flex-1 overflow-auto">
          <Router user={userData} />
        </div>
      </div>
    </BrowserRouter>
  );
}