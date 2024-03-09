// Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate('/home');
  };

  const redirectToPersonal = () => {
    navigate('/person');
  };

  const redirectToCart = () => {
    navigate('/cart');
  };

  const redirectToLogin = () => {
    navigate('/');
  };

  const redirectToKategory = () => {
    navigate('/kategory'); 
  };

  return (
    <div className="navbar">
      <div className="right-section">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3237/3237248.png"
          alt="logo"
          className="logo"
          onClick={redirectToHome}
        />
        <span onClick={redirectToHome} className="logo-text">e-Book</span>
      </div>
      <div className="right-section">
        <Link to="/kategory" className="menu-link">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6464/6464318.png"
            alt="Kategory Icon"
            className="search-icon"
          />
        </Link>
      </div>
      <div className="bar-section">
        <input type="text" placeholder="Search by book and author name" />
        <button className="button-section" type="button">
          Search
        </button>
      </div>
      <div className="right-section">
        <Link to="/home" className="menu-link">
          <img
            src="https://play-lh.googleusercontent.com/sjY0YeMySx9TQOFFJgbRa-hJlFICKIKy2sELJB1z4MCwKRxlXNkhvS5G72ZHvK4sqA"
            alt="Icon 1"
            className="icon1"
          />
        </Link>
        <Link to="/person" className="menu-link">
          <img
            src="https://static.thenounproject.com/png/321991-200.png"
            alt="Icon 2"
            className="icon2"
          />
        </Link>
        <Link to="/cart" className="menu-link">
          <img
            src="https://cdn.pixabay.com/photo/2015/12/23/01/14/edit-1105049_960_720.png"
            alt="Icon 3"
            className="icon3"
          />
        </Link>
        <Link to="/" className="menu-link">
          <img
            src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/46-512.png"
            alt="Icon 4"
            className="icon4"
          />
        </Link>

        <Link to="/" className="menu-link">
          <img
            src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/46-512.png"
            alt="Icon 4"
            className="icon4"
          />
        </Link>

      </div>
    </div>
  );
};

export default Navbar;
