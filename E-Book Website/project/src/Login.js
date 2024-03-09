import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import './Login.css'; 
import axios from "axios";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

   onLogin(username, password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <div className="image-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGAEL8tcgJPcAVNymGTjxqzeTJCRr-uaOIWA&usqp=CAU" alt="Login Image" />
      </div>

      <div className="form-group">
      <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>

        <div className="left-section">
          <Link to="/register"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl-HJ7-M5EWJLUukGKad3otoKIYfYXskQhBA&usqp=CAU" alt="Register Image" /></Link>
        </div>

    </div>
  );
};

export default Login;