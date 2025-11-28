import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username);

    if (!user) {
      setError("User does not exist.");
    } else if (user.password !== password) {
      setError("Incorrect password");
    } else {
      setError('');

      // Store user in localStorage with 'name' field as username
      const loggedInUser = {
        ...user,
        name: user.username 
      };
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

      navigate('/dashboard'); // redirect to dashboard
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      
      <div>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>

      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="error">{error}</p>}
      </div>

      <button onClick={handleLogin}>LOGIN</button>

      
      <Link to="/signup">
        <button className="create-btn">Create Account</button>
      </Link>
    </div>
  );
}
