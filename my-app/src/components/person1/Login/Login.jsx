import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login({ theuser }) {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = () => {
    const inputname = document.getElementById("inputname").value;
    const inputpass = document.getElementById("inputpass").value;

    // Check username
    if (theuser.username !== inputname) {
      setError("User does not exist.");
      return;
    }

    // Check password
    if (theuser.password !== inputpass) {
      setError("Incorrect password");
      return;
    }

    // SUCCESS → Now check the role
    if (theuser.role === "admin") {
      navigate("/admin-dashboard");
    } 
    else if (theuser.role === "teacher") {
      navigate("/teacher-dashboard");
    } 
    else {
      navigate("/dashboard");  // Normal user
    }

    setError("");
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
