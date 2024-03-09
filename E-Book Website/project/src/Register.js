// Register.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegister = () => {
    console.log(`Registering with ${name} ${surname}, ${username}, and ${password}`);
    setRegistrationSuccess(true);
  };

  return (
    <div className="register-container">
      <div className="info-box">
        {registrationSuccess && <p className="success-message">Record created successfully</p>}
      </div>
      <div className="image-container">
        <img src="https://png.pngtree.com/png-clipart/20221006/original/pngtree-transparent-register-now-banner-png-image_8661213.png" alt="Register Image" />
      </div>
      <div className="form-group">
        <div className="name-surname">
          <div className="name-field">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="surname-field">
            <label htmlFor="surname">Surname:</label>
            <input
              type="text"
              id="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <button onClick={handleRegister}>Register</button>
      <p>
        Already have an account? <Link to="/">Login here</Link>
      </p>
    </div>
  );
};

export default Register;
