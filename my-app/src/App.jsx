import { BrowserRouter } from 'react-router-dom';
import SideNav from './components/person4/navbar/Navbar';
import Router from './components/person4/Router';
import { useState, useEffect } from 'react';

export default function App() {

  const [user, setUser] = useState(() => {
    var saved = localStorage.getItem('currentUser');
    return saved ? JSON.parse(saved) : {
      email: 'default@example.com',
      name: 'Default User',
      password: 'password123',
      imageURL: '/vite.svg',
      billingInfo: ["Visa", "PayPal"],
      currentSub: "Basic Plan"
    };
  });


  useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }, [user]);

  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <SideNav />
        <div className="flex-1 overflow-auto">
          <Router user={user} userHandler={setUser} />
        </div>
      </div>
    </BrowserRouter>
  );
}