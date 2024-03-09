// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Person from './Person';
import Cart from './Cart';
import Kategory from './Kategory';
import axios from "axios";


function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (username, password) => {
    console.log(username, password)
    try {
      const response = await axios.post("/login", {username,password});
      console.log("Login response:", response.data);
  
      if (response.status===200) {
        setLoggedIn(true);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error during login:", error.response.data);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
          path="/login"
          element={loggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/home" 
             element={loggedIn ?<Home onLogout={handleLogout}/> : <Navigate to="/login" />} />
          <Route path="/person" element={<Person onLogout={handleLogout} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/kategory" element={<Kategory />} />
          <Route path="/" element={<Navigate to="/login" />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
