import { BrowserRouter } from 'react-router-dom';
import SideNav from './components/person4/navbar/Navbar';
import Router from './components/person4/Router';
import { useState, useEffect } from 'react';

export default function App() {

  const [user, setUser] = useState(() => {
    var saved = localStorage.getItem('currentUser');
    return saved ? JSON.parse(saved) : {
      email: 'default@example.com',
      username: 'default username',
      password: 'password123',
      imageURL: '/vite.svg',
      billingInfo: ["Visa", "PayPal"],
      currentSub: "Basic Plan",
      orders: [
        {orderId: 1, name: "Javascript Fundamentals", payDate: "10-10-24", total: 323}
      ],
      userProgress: {
        courses: {
          enrolled: ["Javascript Fundamentals", "Calculu-II"],
          completed: ["Basic Urdu", "Expository Writing"]
        },
        streakDays: 6,
        level: "Silver",
        quizInfo: {
          totalQuizzes: 3,
          avgScore: 33
        }
      }
    };
  });


  useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }, [user]);

  console.log(user);

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