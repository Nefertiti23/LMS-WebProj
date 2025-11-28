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
      return;
    }

    if (user.password !== password) {
      setError("Incorrect password");
      return;
    }

    setError('');

    // Save logged-in user
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    // Navigate based on role
    if (user.role === "admin") {
      navigate("/admin-dashboard");
    } else if (user.role === "teacher") {
      navigate("/teacher-dashboard");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <div>
        <label>Username</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
      </div>

      <div>
        <label>Password</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>

      {error && <p className="error">{error}</p>}

      <button onClick={handleLogin}>Login</button>

      <Link to="/signup">
        <button className="create-btn">Create Account</button>
      </Link>
    </div>
  );
}
