// Person.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './Person.css';

const Person = ({ onLogout }) => {
  const navigate = useNavigate();

  const people = [
    {
      id: 1,
      name: 'John Doe',
    },
    {
      id: 2,
      name: 'Joasdhn Doe',
    },
    {
      id: 3,
      name: 'Jane Smith',
    },
    {
      id: 4,
      name: 'Alice Johnson',
    },
  ];

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('********');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setPassword(showPassword ? '********' : 'youractualpassword');
  };

  const handleLogout = () => {
    onLogout();
    navigate('/'); 
  };

  return (
    <div>
      <Navbar />
      <div className="person-containerr">
        <h2 className="appi-title">Favorites</h2>
        <div className="content-container">
          <div className="menu-section">
            <div className="menu-title">Personal Information</div>
            <div className="additional-info">
              <p>Name: </p>
              <p>Username: </p>
              <button
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? 'Hide Password' : 'Show Password'}
              </button>
              {showPassword ? (
                <p>Password: {password}</p>
              ) : (
                <p>Password: ********</p>
              )}
            </div>
            <button onClick={handleLogout} className="menu-button">
              Logout
            </button>
          </div>
          <div className="people-section">
            {people.map((person) => (
              <div key={person.id} className="person-card">
                <div className="text-info">
                  <h3>{person.name}</h3>
                </div>
                <div className="button-group">
                  <button className="remove-button">Remove</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
