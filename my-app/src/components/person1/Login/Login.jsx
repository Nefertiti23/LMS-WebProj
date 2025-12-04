import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login({ theuser, allusers, handleUser, handleUsers }) {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = () => {
    const inputname = document.getElementById("inputname").value;
    const inputpass = document.getElementById("inputpass").value;

    if (!allusers || allusers.length === 0) {
      setError("User database not loaded");
      return;
    }

    const foundUser = allusers.find(user => user.username === inputname);

    // Check username
    if (!foundUser) {
      setError("User does not exist.");
      return;
    }

    // Check password
    if (foundUser.password !== inputpass) {
      setError("Incorrect password");
      return;
    }

    setError("");
    handleUser(foundUser);

    if (foundUser.role === "admin") {
      navigate("/admin-dashboard");
    } 
    else if (foundUser.role === "teacher") {
      navigate("/teacher-dashboard");
    } 
    else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <div>
        <label>Username</label>
        <input id="inputname" type="text" />
      </div>

      <div>
        <label>Password</label>
        <input id="inputpass" type="password" />
      </div>

      {error && <p className="error-text">{error}</p>}

      <button onClick={handleLogin}>Login</button>

      <Link to="/signup">
        <button className="create-btn">Create Account</button>
      </Link>
    </div>
  );
}
