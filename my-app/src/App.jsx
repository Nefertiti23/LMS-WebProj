import { BrowserRouter } from 'react-router-dom';
import Router from './components/person4/Router';
import { useState, useEffect } from 'react';

export default function App() {
  const [allUsers, setUsers] = useState (() => {
    var savedUsers = localStorage.getItem('allUsers');
    return savedUsers ? JSON.parse(savedUsers) : [{
      email: 'JohnnyDoe@reve.com',
      username: 'Johnny',
      password: 'password123',
      role: 'user',
      joinDate: '10-10-23',
      imageURL: '/vite.svg',
      billingInfo: ["Visa", "PayPal"],
      currentSub: "Basic Plan",
      orders: [
        {orderId: 1, name: "Javascript Fundamentals", payDate: "10-10-24", total: 323}
      ],
      userProgress: {
        courses: {
          enrolled: ["Javascript Fundamentals", "Calculus-II"],
          completed: ["Basic Urdu", "Expository Writing", "Random Course"]
        },
        streakDays: 7,
        level: "Silver",
        quizInfo: {
          totalQuizzes: 3,
          avgScore: 33
        }
      }
    }, 
    {
      email: 'jonathan@reve.com',
      username: 'Jon',
      password: 'password123',
      role: 'admin',
      joinDate: '10-10-23'
    }];
  });

  const [currentuser, setCurrentUser] = useState(() => {
    var saved = localStorage.getItem('currentUser');
    return saved ? JSON.parse(saved) : {
      email: 'JohnnyDoe@reve.com',
      username: 'Johnny',
      password: 'password123',
      role: 'user',
      joinDate: '10-10-23',
      imageURL: '/vite.svg',
      billingInfo: ["Visa", "PayPal"],
      currentSub: "Basic Plan",
      orders: [
        {orderId: 1, name: "Javascript Fundamentals", payDate: "10-10-24", total: 323}
      ],
      userProgress: {
        courses: {
          enrolled: ["Javascript Fundamentals", "Calculus-II"],
          completed: ["Basic Urdu", "Expository Writing"]
        },
        streakDays: 7,
        level: "Silver",
        quizInfo: {
          totalQuizzes: 3,
          avgScore: 33
        }
      }
    };
  });


  useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(currentuser));
  }, [currentuser]);

  useEffect(() => {
    localStorage.setItem('allUsers', JSON.stringify(allUsers));
  }, [allUsers]);

  console.log(allUsers);

  return (
    <BrowserRouter>
      <Router user={currentuser} userHandler={setCurrentUser} 
      userArr={allUsers} setUserArr={setUsers} />
    </BrowserRouter>
  );
}