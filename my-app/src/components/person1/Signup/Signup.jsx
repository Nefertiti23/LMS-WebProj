import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const users = JSON.parse(localStorage.getItem('users')) || [];

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

    const userExists = users.find(u => u.username === username);
    if (userExists) {
      setError("Username already exists");
      setSuccess('');
      return;
    }

    const newUser = { username, email, password, role };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    setSuccess("Account created successfully! Redirecting to login...");
    setError('');

    setTimeout(() => navigate('/login'), 2000);
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
          <option value="admin">Admin</option>
        </select>
      </div>

      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}

      <button onClick={handleSignup} className="create-btn">Create Account</button>
    </div>
  );
}
