import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

export default function Signup({handleUser, allusers, handleUsers}) {
  console.log(allusers);

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = () => {
    if (!username || !email || !password) {
      setError("Please fill in all fields");
      setSuccess('');
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      setSuccess('');
      return;
    }

    const userExists = allusers.find(u => u.username === username);
    if (userExists) {
      setError("Username already exists");
      setSuccess('');
      return;
    }

    const current = new Date();
    const newUser = { 
      username, 
      email, 
      password, 
      role,
      joinDate: `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`,
      imageURL: '/vite.svg',
      billingInfo: ["Visa", "PayPal"],
      currentSub: "Basic Plan",
      orders: [],
      userProgress: {
        courses: {
          enrolled: [],
          completed: []
        },
        streakDays: 0,
        level: "Bronze",
        quizInfo: {
          totalQuizzes: 0,
          avgScore: 0
        }
      }
    };

    handleUsers([...allusers, newUser]);
    handleUser(newUser);
    setSuccess("Account created successfully! Redirecting to login...");
    setError('');

    setTimeout(() => navigate('/login'), 3000);
  };

  return (
    <div className="signup-container">
      <h2>Create Account</h2>

      <div>
        <label>Username</label>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </div>

      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>

      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>

      <div>
        <label>Role</label>
        <select value={role} onChange={e => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="teacher">Teacher</option>
        </select>
      </div>

      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}

      <button onClick={handleSignup} className="create-btn">Create Account</button>
    </div>
  );
}
