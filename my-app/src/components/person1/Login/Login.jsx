import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login({theuser}) {
  console.log(theuser)
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = () => {
    var inputname = document.getElementById('inputname').value;
    var inputpass = document.getElementById('inputpass').value;

    if (theuser.username !== inputname) {
      setError("User does not exist.");
      return;
    }

    else if (theuser.password !== inputpass) {
      setError("Incorrect password");
      return;
    }

    else {
      navigate("/dashboard");
    }

    setError('');

    // Save logged-in user
    // localStorage.setItem("loggedInUser", JSON.stringify(user));

    // Navigate based on role
    // if (user.role === "admin") {
    //   navigate("/admin-dashboard");
    // } else if (user.role === "teacher") {
    //   navigate("/teacher-dashboard");
    // } else {
    //   navigate("/dashboard");
    // }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <div>
        <label>Username</label>
        <input id="inputname"
          type="text"
        />
      </div>

      <div>
        <label>Password</label>
        <input id="inputpass"
          type="password"
        />
      </div>
      {<p>{error}</p>}
      <button onClick={handleLogin}>Login</button>

      <Link to="/signup">
        <button className="create-btn">Create Account</button>
      </Link>
    </div>
  );
}
